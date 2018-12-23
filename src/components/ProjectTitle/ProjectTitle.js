export default {
    name: 'project-title',
    components: {},
    props: {
    	title: String,
    	cursorPosition: {}
    },
    data() {
        return {
        	horizontal: {
                min: 0,
                max: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
            },
            vertical: {
                min: 0,
                max: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            },
            weight: {
                min: 300,
                max: 800
            },
            space: {
                min: 0,
                max: 150
            },
            minWidth: 300,
            maxWidth: 800,
            scaledWeight: 0,
            scaledSpace: 0,
            offsetY: 0,
            scaleMultiplier: 2
        }
    },
    watch: {
    	cursorPosition: {
            handler(newVal){

        		let distance = this.scaleMultiplier * Math.abs(newVal.y - this.offsetY);
        		// console.log(distance);

        		let rangeTop = this.vertical.max - this.offsetY;
        		let rangeBottom = this.vertical.max - (this.vertical.max - this.offsetY);

        		let rangeMax = rangeTop > rangeBottom ? rangeTop : rangeBottom;
    			let verticalRange = {
    				min: 0,
    				max: rangeMax
    			};

                let space = this.fitInRange(this.space, this.horizontal, newVal.x)
                let weight = this.fitInRange(this.weight, verticalRange, distance)

                if(this.title === 'pravoljudski.org')
                	console.log(rangeMax);

                let difference = weight - this.minWidth;
                let newWeight = this.maxWidth - difference;

                	// this.scaledSpace = space;
            	this.scaledWeight = newWeight;

                
            },
            deep: true
        }
    },
    computed: {
    	classObj: function() {
    		return {
				fontVariationSettings: `"wght" ${this.scaledWeight}, "wdth" ${this.scaledSpace}`
    		}
    	}
    },
    mounted() {
    	this.offsetY = this.$el.offsetTop + this.$el.clientHeight;
    },
    methods: {
        fitInRange(range, measures, val){
            let fitValue = (range.max - range.min) * ((val - measures.min) / (measures.max - measures.min)) + range.min;
            return fitValue;
        }
    }
}