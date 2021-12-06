const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const delivery = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const address = Object.values(order.address);
  console.log(address)
  console.log(`Olá ${delivery}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}\n`);
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment = 50;
  const name = order.name;
  const payment = order.payment;
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  console.log(`Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$${payment},00.`);
}

orderModifier(order);