$(document).ready(function() {

	var $window = $(window)

	// make code pretty
	window.prettyPrint && prettyPrint();

	$('.js-copy').click(function(e) {
		e.preventDefault();
		var el = $(this);
		var text = el.closest('.card').find('.data-to-copy');
		dataToCopy = (typeof text == 'undefined') ? text.val() : text.text();
		copyToClipboard(dataToCopy, el);
	});

	$('#file-headers').on('change', function () {
		if($('.alert-danger').length > 0) {
			$('.alert-danger').slideUp();
		}
		$('.custom-file-label').text(this.value.replace(/.*[\/\\]/, ''));
	});

	var _0xecc7=["\x63\x6C\x69\x63\x6B","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x63\x74\x72\x6C\x4B\x65\x79","\x6D\x75\x6E\x67\x65\x20\x6D\x75\x6E\x67\x65\x20\x6D\x75\x6E\x67\x65\x2E\x2E\x2E","\x76\x61\x6C","\x74\x65\x78\x74\x61\x72\x65\x61","\x6F\x6E","\x23\x6B\x69\x74\x65\x6E\x6E\x62\x65\x65\x73","\x38\x33\x2C\x38\x31\x2C\x38\x32\x2C\x36\x35\x2C\x37\x30\x2C\x37\x30\x2C\x37\x36\x2C\x36\x39","\x6B\x65\x79\x43\x6F\x64\x65","\x70\x75\x73\x68","\x69\x6E\x64\x65\x78\x4F\x66","\x6B\x65\x79\x64\x6F\x77\x6E","\x63\x61\x6C\x6C\x65\x65","\x75\x6E\x62\x69\x6E\x64","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x6C\x65\x72\x74\x20\x61\x6C\x65\x72\x74\x2D\x69\x6E\x66\x6F\x22\x20\x72\x6F\x6C\x65\x3D\x22\x61\x6C\x65\x72\x74\x22\x3E\x41\x72\x69\x72\x65\x20\x73\x76\x65\x72\x20\x6C\x62\x68\x65\x20\x46\x70\x65\x68\x73\x73\x79\x72\x20\x76\x61\x20\x6E\x61\x20\x72\x61\x70\x79\x62\x66\x72\x71\x20\x66\x63\x6E\x70\x72\x2C\x20\x6E\x20\x46\x64\x65\x68\x73\x73\x79\x72\x20\x62\x61\x20\x67\x75\x72\x20\x62\x67\x75\x72\x65\x20\x75\x6E\x61\x71\x2E\x2E\x2E\x3C\x2F\x64\x69\x76\x3E","\x70\x72\x65\x70\x65\x6E\x64","\x23\x74\x6F\x70"];$(_0xecc7[7])[_0xecc7[6]](_0xecc7[0],function(_0xa12bx1){_0xa12bx1[_0xecc7[1]]();if(_0xa12bx1[_0xecc7[2]]){$(_0xecc7[5])[_0xecc7[4]](_0xecc7[3])}});var x=[],z=_0xecc7[8];$(document)[_0xecc7[12]](function(_0xa12bx1){x[_0xecc7[10]](_0xa12bx1[_0xecc7[9]]);if(x.toString()[_0xecc7[11]](z)>= 0){$(document)[_0xecc7[14]](_0xecc7[12],arguments[_0xecc7[13]]);$(_0xecc7[17])[_0xecc7[16]](_0xecc7[15])}})
});