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
        friends: [
          {
            nickname: 'Captain America',
            firstName: 'Steve',
            lastName: null,
            active: undefined,
            address: 'MCU'
          }
        ]
      }
    ]
  },
  thirdExample: {
    a : 'foo',
    b : 'bar',
    c : null,
    d : undefined,
    e : 0,
    f : {
      a : 'fuz',
      b : null,
      c : {
        a : 'biz',
        b : 'buz',
        c : [
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0,
            f : false
          },
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0
          },
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0
          }
        ]
      }
    }
  }
}