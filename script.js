let show_expression = document.querySelector('.get-input')
let display_btn = document.querySelectorAll('.d-btn')
let equalto = document.querySelector('.equalto')
let show_result = document.querySelector('.show-result')
let clear = document.querySelector('.clear')
let percent = document.querySelector('.percent')
let delete_btn = document.querySelector('.delete')
let sub = document.querySelector('.sub')


for (let btn of display_btn) {
	btn.addEventListener('click', function () {
		let value = this.value
		show_expression.value += value
	})
}



// let i = 0


// while (i < display_btn.length) {
// 	display_btn[i].addEventListener('click', function() {
// 		let value = this.value
		
// 		if (value == '*' || value == '+' || value == '/') {
// 			if (show_expression.value != '') {
// 				show_expression.value += value
// 			}
// 		} else {
// 			show_expression.value += value
// 		}
// 	})

// 	i++
// }

equalto.addEventListener('click', function () {
	let exp = show_expression.value.replace('x', '*').replace('÷', '/')
	show_result.innerHTML = eval(exp)
})

clear.addEventListener('click', function () {
	show_result.innerHTML = 0
	show_expression.value = ''
})

percent.addEventListener('click', function () {
	let exp = show_expression.value.replace('x', '*').replace('÷', '/')
	show_result.innerHTML = Number(eval(exp))/100
})


delete_btn.addEventListener('click', function() {
	show_expression.value = show_expression.value.substring(0, show_expression.value.length - 1);
})

sub.addEventListener('click', function(){
	let exp = show_expression.value.replace('x', '*').replace('÷', '/')
	show_result.innerHTML = -(Number(eval(exp)))
})


