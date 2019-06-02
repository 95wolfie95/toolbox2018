const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const publicRoot = './wwwroot/'

app.use(express.static(publicRoot))

app.use(bodyParser.json())
app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
}))
app.use(passport.initialize());
app.use(passport.session());


let users = [{
    id: 1,
    name: "Jude",
    email: "user@email.com",
    password: "password"
},
{
    id: 2,
    name: "Emma",
    email: "emma@email.com",
    password: "password2"
}
]

app.get("/", (req, res, next) => {
    res.sendFile("index.html", { root: publicRoot })
})

const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).send('Não está autenticado')
    }
    else {
        return next()
    }
}

app.get("/api/user", authMiddleware, (req, res) => {
    let user = users.find((user) => {
        return user.id === req.session.passport.user
    })
    console.log([user, req.session])
    res.send({ user: user })
})

app.post("/api/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).send([user, "Não é possível realizar o Login", info])
        }

        req.login(user, (err) => {
            res.send("Logged in")
        })
    })(req, res, next)
})

app.get('/api/logout', function (req, res) {
    req.logout();
    console.log("logged out")
    return res.send();
})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    (username, password, done) => {
        let user = users.find((user) => {
            return user.email === username && user.password === password
        })
        if (user) {
            done(null, user)
        }
        else {
            done(null, false, { message: 'Password ou Email inválidos' })
        }
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    let user = users.find((user) => {
        return user.id === id
    })
    done(null, user)
})

app.listen(3000, () => {
    console.log("App listening on port 3000!")
})