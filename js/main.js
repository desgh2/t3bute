$(function () {
    $(document).ready(function () {

        jQuery.fn.clickToggle = function (a, b) {
            return this.on("click", function (ev) { [b, a][this.$_io ^= 1].call(this, ev) })
        };

        // TEST:
        $('#toggle-menu').clickToggle(function (ev) {
            $('#primary-menu').css('display', 'flex');
        }, function (ev) {
            $('#primary-menu').hide();
        });

        /* $('#toggle-menu').toggle(function() {
            $('#primary-menu').show();
        }, function() {
            $('#primary-menu').hide();
        }); */

       /*  $("#toggle-menu").toggle(function () {
            $('#primary-menu').show();
        }, function () {
            $('#primary-menu').hide();
        }); */

    });
});