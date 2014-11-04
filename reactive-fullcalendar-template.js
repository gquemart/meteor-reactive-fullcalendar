Template.ReactiveFullcalendar.rendered = function () {
	var data = this.data;
    var calendar = new ReactiveFullcalendar(data.options);
    this.autorun(function(){
        calendar.update();
        calendar.autorunFunctions();
    });
};

Template.ReactiveFullcalendar.helpers({
    id: function () {
        return (this.options.id || "fullCalendar") + "_wrapper";
    }
});