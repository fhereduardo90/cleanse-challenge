module.exports = {
  firstExample: {
    nickname  : 'spiderman',
    firstName : 'Peter',
    lastName  : 'Parker',
    age       : undefined,
    address   : null,
    friends   : [
      {
        nickname  : 'hulk',
        firstName : undefined,
        lastName  : 'Banner',
        age       : 0,
        address   : null,
        friends   : null,
      },
      {
        nickname  : 'iron man',
        firstName : 'Tony',
        lastName  : 'Stark',
        age       : undefined,
        address   : false,
        friends   : [
          {
            nickname  : 'war machine',
            firstName : null,
            lastName  : null,
            age       : undefined,
            address   : undefined,
            friends   : []
          }
        ]
      }
    ]
  },
  secondExample: {
    nickname: null,
    firstName: 'Black',
    lastName: 'Panter',
    active: false,
    address: null,
    friends: [
      {
        nickname: 'Black Widow',
        firstName: 'Natasha',
        lastName: 'Romanova',
        active: true,
        address: null,
      }
    ]
  }
}