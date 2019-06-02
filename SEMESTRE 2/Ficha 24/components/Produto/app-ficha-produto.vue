<template>
    <app-Quote>
        <h2>{{produto}}</h2>
        <p>{{valor}}</p>
    </app-Quote>  
</template>

<script>
import quote from '../Quote/quote';
export default {
    components: {
        appQuote: quote
    },
    props: {
        produto: {
            type: undefined,
            required: true
        },
        valor : {
            type: undefined,
            required: true
        }
    }
}
</script>
