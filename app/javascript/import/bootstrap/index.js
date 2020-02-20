import 'bootstrap/js/dist/alert'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/carousel'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/index'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/popover'
import 'bootstrap/js/dist/scrollspy'
import 'bootstrap/js/dist/tab'
import 'bootstrap/js/dist/toast'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/js/dist/util'

// bootstrap tooltips https://getbootstrap.com/docs/4.3/components/tooltips/
document.addEventListener('turbolinks:load', () => {
  $('[data-toggle="tooltip"]').tooltip()
})

// $('[data-toggle="popover"]').popover()
// $('.toast').toast(option)
