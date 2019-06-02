<template>

    <TheSideNavToggle @Toggle="$emit('SideNavToggle')" />

</template>

<script>

import Logo from '~/components/Logo.vue';
import TheSideNavToggle from '~/components/Navigation/TheSideNavToggle';

export default {
    name: "TheHeader",
    components: {
        Logo,
        TheSideNavToggle
    }
}

</script>
