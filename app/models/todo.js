import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Complete tutorial",
            isCompleted: false
        },
        {
            id: 2,
            title: "Checkout more ember stuff (like a half decent tutorial",
            isCompleted: true
        },
        {
            id: 3,
            title: "Eat something",
            isCompleted: false
        }
    ]
});
