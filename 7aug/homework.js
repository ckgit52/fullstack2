
const nestedObject = {
    user: {
      id: 1,
      name: "John Doe",
      contact: {
        email: "john.doe@example.com",
        phone: {
          mobile: "123-456-7890",
          home: "555-555-5555"
        },
        address: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          postalCode: "12345",
          country: "USA"
        }
      }
    },
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: {
          enabled: true,
          sound: "chime"
        }
      }
    },
    orders: [
      {
        id: 101,
        date: "2024-01-01",
        items: [
          { productId: 1, name: "Widget A", quantity: 2, price: 9.99 },
          { productId: 2, name: "Widget B", quantity: 1, price: 19.99 }
        ],
        total: 39.97
      },
      {
        id: 102,
        date: "2024-02-01",
        items: [
          { productId: 3, name: "Widget C", quantity: 3, price: 7.99 },
          { productId: 4, name: "Widget D", quantity: 2, price: 14.99 }
        ],
        total: 53.94
      }
    ]
  };
  
  console.log(nestedObject.user.contact.address.street)
  console.log(nestedObject.user.contact.address.city)
  console.log(nestedObject.user.contact.address.state)
  console.log(nestedObject.user.contact.address.postalCode)
  console.log(nestedObject.user.contact.address.country)