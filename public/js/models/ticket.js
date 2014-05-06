var Ticket = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    status: DS.attr('string')
});

Ticket.FIXTURES = [
    {
        id: 1,
        title: 'Ticket 1',
        description: 'Lorem Ipsum something, and the rest of the thing',
        status: 'New'
    },{
        id: 2,
        title: 'Ticket 2',
        description: 'Lorem Ipsum ASS, and the rest of the thing',
        status: 'New'
    },{
        id: 3,
        title: 'Ticket 3',
        description: 'LorSSem Ipsum something, and the rest of the thing',
        status: 'New'
    },
]
module.exports = Ticket;

