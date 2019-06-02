<template>
    <TheSideNavToggle @Toggle="$emit('sidenavToggle')" />
</template>

<script>
import Logo from '~/components/Logo.vue';
import TheSideNavToggle from '@/Components/Navigation/TheSideNavToggle';

export default {
    name: "TheHeader",
    components: {
        Logo,
        TheSideNavToggle
    }
}
</script>
