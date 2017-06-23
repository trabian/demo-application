/**
 * Contains the data for an example completed loan application.  This data is valid from an API standpoint
 * and is used by the devtools for auto-completing the application during development.
 */

export default {
  selected: {
    savings: 'UNSELECTED',
    spending: 'SELECTED',
    credit: 'UNSELECTED'
  },
  router: {
    location: {
      pathname: '/apply',
      search: '',
      hash: '',
      key: '3pixpz'
    }
  },
  form: {
    apply: {
      registeredFields: {
        firstName: {
          name: 'firstName',
          type: 'Field',
          count: 1
        },
        middleInitial: {
          name: 'middleInitial',
          type: 'Field',
          count: 1
        },
        lastName: {
          name: 'lastName',
          type: 'Field',
          count: 1
        },
        soc: {
          name: 'soc',
          type: 'Field',
          count: 1
        },
        dob: {
          name: 'dob',
          type: 'Field',
          count: 1
        },
        phoneNumber: {
          name: 'phoneNumber',
          type: 'Field',
          count: 1
        },
        phoneNumberType: {
          name: 'phoneNumberType',
          type: 'Field',
          count: 1
        },
        emailAddress: {
          name: 'emailAddress',
          type: 'Field',
          count: 1
        },
        address: {
          name: 'address',
          type: 'Field',
          count: 1
        },
        city: {
          name: 'city',
          type: 'Field',
          count: 1
        },
        state: {
          name: 'state',
          type: 'Field',
          count: 1
        },
        zipCode: {
          name: 'zipCode',
          type: 'Field',
          count: 1
        },
        addJointApplicant: {
          name: 'addJointApplicant',
          type: 'Field',
          count: 1
        }
      },
      fields: {
        firstName: {
          visited: true,
          touched: true
        },
        middleInitial: {
          visited: true,
          touched: true
        },
        lastName: {
          visited: true,
          touched: true
        },
        soc: {
          visited: true,
          touched: true
        },
        dob: {
          visited: true,
          touched: true
        },
        phoneNumber: {
          visited: true,
          touched: true
        },
        phoneNumberType: {
          visited: true,
          touched: true
        },
        emailAddress: {
          visited: true,
          touched: true
        },
        address: {
          visited: true,
          touched: true
        },
        city: {
          visited: true,
          touched: true
        },
        state: {
          visited: true,
          touched: true
        },
        zipCode: {
          visited: true,
          touched: true
        }
      },
      values: {
        firstName: 'John',
        middleInitial: 'Z',
        lastName: 'Cena',
        soc: '331-92-0420',
        dob: '1969-02-03',
        phoneNumber: '(708) 448-1337',
        phoneNumberType: 'Work',
        emailAddress: 'cool@guy.com',
        address: '11883 West South Street',
        city: 'Nome',
        state: 'AK',
        zipCode: '18283'
      },
      anyTouched: true
    }
  }
};
