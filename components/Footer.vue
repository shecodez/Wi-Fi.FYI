<template>
    <footer class="site-footer">
        <p>
            <span>&copy; {{ new Date().getFullYear() }} &nbsp;</span> 
            <a href="https://shecodez.com" target="_blank">shecodez</a>
        </p>
    </footer>
</template>

<style scoped>
.site-footer {
    @apply bg-slate-100 flex p-4 items-center justify-center;
}
</style>