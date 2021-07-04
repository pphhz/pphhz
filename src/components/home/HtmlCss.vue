<template>
    <div class="htmlcss">
        <ul>
            <li>
                <CssCursor></CssCursor>
            </li>
            <li>
                <ScrollBar></ScrollBar>
            </li>
            <li>
                <Ellipsis></Ellipsis>
            </li>
            <li>
                <Wrap></Wrap>
            </li>
            <li>
                <Background></Background>
            </li>
        </ul>
    </div>
</template>


<script>
    import CssCursor from '../Content/CssCursor'
    import ScrollBar from '../Content/ScrollBar'
    import Ellipsis from '../Content/Ellipsis'
    import Wrap from '../Content/Wrap'
    import Background from '../Content/Background'

    export default {
        name: 'HtmlCss',
        components: {
            CssCursor,
            ScrollBar,
            Ellipsis,
            Wrap,
            Background,
        },
        data() {
            return {}
        },
        methods: {},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
    @import '../../assets/css/variable';

    .htmlcss {
        width: 100%;
        min-height: 500px;
        background-color: $background_color3;

        ul {
            li {
                border-bottom: 1px solid $border_color1;

            }
        }
    }
</style>
