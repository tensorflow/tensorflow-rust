(function() {var implementors = {};
implementors["half"] = [{"text":"impl LowerHex for bf16","synthetic":false,"types":[]},{"text":"impl LowerHex for f16","synthetic":false,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;T&gt; LowerHex for Complex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: LowerHex + Num + PartialOrd + Clone,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()