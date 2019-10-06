var app = new Vue({
    el: "#app",
    data: {
        list: [
            { id: 1, name: 'iPhone 7', price: 6000, count: 1, checked: true },
            { id: 2, name: 'iPad Pro', price: 1000, count: 1, checked: true },
            { id: 3, name: 'MacBook', price: 3000, count: 1, checked: true },
        ],
        checked:false,
        listNew:[]
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            this.listNew = this.list.filter((item) => {
                return item.checked === true
            })
            // for (let i = 0; i < this.list.length; i++) {
            //     total += this.list[i].price * this.list[i].count
            // }
            for (let i = 0; i < this.listNew.length; i++) {
                total += this.listNew[i].price * this.listNew[i].count
            }
            return total
        }
    },
    methods: {
        handleReduce(index) {
            if (this.list[index].count === 1) {
                return
            }
            this.list[index].count--;
        },
        handleAdd(index) {
            this.list[index].count++;
        },
        handleRemove(index) {
            this.list.splice(index, 1)
        },
        chengeCheckbox(index) {
            if (this.list[index].checked === true) {
                this.list[index].checked = false
                // this.checked = false
            } else {
                this.list[index].checked = true
            }
        },
        chengeAll() {
            // console.log(this.checked);
            if (this.checked == true) {
                this.checked = false
                for (let i = 0; i < this.list.length; i++) {
                    this.list[i].checked = false
                }
            }else {
                this.checked = true
                for (let i = 0; i < this.list.length; i++) {
                    this.list[i].checked = true
                }
            }
        }
    },
    mounted() {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checked === true) {
                this.checked = true
            } else {
                return
            }
        }
    },
    watch: {
        "listNew":function(){
            if (this.listNew.length === this.list.length) {
                this.checked = true
            }else {
                this.checked = false
            }
        }
    },
})