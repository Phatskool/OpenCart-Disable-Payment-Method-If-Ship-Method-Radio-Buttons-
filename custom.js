<script>
jQuery(document).ready(function() {
	jQuery('input[name=shipping_method]').change(function(){/*on input change, check:*/
		if (jQuery('.panel-body .radio input[name=shipping_method][value="xshippingpro.xshippingpro2"]:checked').length > 0) {
		jQuery('.panel-body .radio:nth-child(4)').hide();/*if radio button is checked, hide a specific class(in this case another radio button)*//*notice that we can specify the desired button using css' value selector alongside name*/
	  }else{
		jQuery('.panel-body .radio:nth-child(4)').show();/*if not then keep it enabled*/
		
	  }
	});
});
</script>