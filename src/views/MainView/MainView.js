import ProjectTitle from '@/components/ProjectTitle';

export default {
    name: 'main-view',
    components: {
        ProjectTitle
    },
    props: [],
    data() {
        return {
            projects: [
                {
                    title: "suharekawine.com",
                },
                {
                    title: "creativeinclusivity.com",
                },
                {
                    title: "zenevloed.nl",
                },
                {
                    title: "dritonselmani.com",
                },
                {
                    title: "pravoljudski.org",
                }
            ],
            cursorPosition: {
                x: 0,
                y:0
            }
        }
    },
    watch: {
    },
    watch: {
    },
    mounted() {
    },
    methods: {
        handleMouse(e) {
            this.cursorPosition.y = e.clientY;
            this.cursorPosition.x = e.clientX;
        }
    }
}