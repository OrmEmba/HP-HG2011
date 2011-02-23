link = self.location.hash.substr(1);
var active_link;

// click handlers
function addClickHandlers() {
	//links on 'start.html'
	$("#page01").click( function() {
		self.location.href = "index.htm#content01";
	});
	$("#page02").click( function() {
		self.location.href = "index.htm#content02";
	});
	$("#page03").click( function() {
		self.location.href = "index.htm#content03";
	});
	$("#page04").click( function() {
		self.location.href = "index.htm#content04";
	});
	$("#pagegaestebuch").click( function() {
		self.location.href = "index.htm#gaestebuch";
	});
	$("#pageimpressum").click( function() {
		self.location.href = "index.htm#impressum";
	});
	
	//links
	$("#linkueber").click( function() { //link 0
		$("#main").load("content/ueber.html");
		self.location.hash = "ueber";
		set_active_link("#linkueber");
	});
	$("#link01").click( function() { //link 1
		$("#main").load("content/content01.html");
		self.location.hash = "content01";
		set_active_link("#link01");
	});	
	$("#link02").click( function() { //link 2
		$("#main").load("content/content02.html");
		self.location.hash = "content02";
		set_active_link("#link02");
	});	
	$("#link03").click( function() { //link 3
		$("#main").load("content/content03.html");
		self.location.hash = "content03";
		set_active_link("#link03");
	});
	$("#link04").click( function() { //link 4
		$("#main").load("content/content04.html");
		self.location.hash = "content04";
		set_active_link("#link04");
	});
	$("#linkimpressum").click( function() { //link 5
		$("#main").load("content/impressum.html");
		self.location.hash = "impressum";
		set_active_link("#linkimpressum");
	});
	$("#linkdownloads").click( function() { //link 6
		$("#main").load("content/downloads.html");
		self.location.hash = "downloads";
		set_active_link("#linkdownloads");
	});
	$("#linkgaestebuch").click( function() { //link 7
		$("#main").load("content/gaestebuch.html");
		self.location.hash = "gaestebuch";
		set_active_link("#linkgaestebuch");
	});
	
	$("#warning").hover(
		function() {
			$(this).clearQueue();
			$(this).fadeTo("fast", 1);
		},
		function() {
			$(this).clearQueue();
			$(this).fadeTo("slow", 0.5);
		}
	);
}

// ready event for document -- executed when DOM is ready
$(document).ready(addClickHandlers);
$(document).ready( function() {
	//initialise link style
	init_links();
	//browser detection and support "information"
	if (navigator.userAgent.indexOf("MSIE") != -1) {
		$("#warning").slideDown(600);
		$("#browsertip").delay(5000).slideDown(600);
		$("#warning").delay(10000).fadeTo("slow", 0.5);
	}
});

function start_switch() {
	if (link != "") {
		if (link == "ueber")
			$("#linkueber").click();
		else if (link == "content01")
			$("#link01").click();
		else if (link == "content02")
			$("#link02").click();
		else if (link == "content03")
			$("#link03").click();
		else if (link == "content04")
			$("#link04").click();
		else if (link == "downloads")
			$("#linkdownloads").click();
		else if (link == "gaestebuch")
			$("#linkgaestebuch").click();
		else if (link == "impressum")
			$("#linkimpressum").click();
	}
}

function init_links() {
	 $("#linkueber").addClass("linkC");
	 $("#link01").addClass("linkA");
	 $("#link02").addClass("linkA");
	 $("#link03").addClass("linkA");
	 $("#link04").addClass("linkA");
	 $("#linkdownloads").addClass("linkB");
	 $("#linkgaestebuch").addClass("linkB");
	 $("#linkimpressum").addClass("linkC");	 
}

function set_active_link(link) {
	if (active_link != null)
		$(active_link).removeClass("linkOn");
	$(link).addClass("linkOn");
	active_link = link;
}