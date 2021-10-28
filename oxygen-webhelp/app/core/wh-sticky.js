define(["jquery"], function ($) {
    
    $(document).ready(function () {
      const header = $(".wh_header");
      header.addClass("header-sticky");
      header.css({"top": "0"});
      
      const breadcrumb = $(".wh_tools").parent();
      breadcrumb.addClass("breadcrumb-sticky");
      breadcrumb.css({"top": header.outerHeight()});
      
      const whIndexTerms = $(".wh-letters");
      whIndexTerms.addClass("indexTerms-sticky");
      whIndexTerms.css({"top": header.outerHeight()});

      const targetElement = document.getElementsByClassName("wh_header")[0];
      
      
      const resizeObserver = new ResizeObserver(entries => {
      
			breadcrumb.css({"top": header.outerHeight()});
      whIndexTerms.css({"top": header.outerHeight()});
        
		});

		resizeObserver.observe(targetElement);


    });
});