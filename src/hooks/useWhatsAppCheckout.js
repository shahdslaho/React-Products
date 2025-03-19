import useCartStore from '../../src/store/useCartStore'; // Ensure the import path is correct

const useWhatsAppCheckout = () => {
  const { cartItems } = useCartStore();

  const handleWhatsAppCheckout = (customerInfo) => {
    const phoneNumber = '6283159979459'; // Ensure the number is correct without + or other symbols
    if (!customerInfo) {
      alert("Please provide customer information.");
      return;
    }

    const items = cartItems.map(item => 
      `${item.title}: $${item.price} x ${item.quantity || 1}`
    ).join('%0A'); // Replace new lines with %0A

    const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const tax = total * 0.08;
    const finalTotal = total + tax;

    const fullMessage = 
      `Order Details:%0A%0A${items}%0A%0A
      Customer:%0AName: ${customerInfo?.firstName} ${customerInfo?.lastName}%0A
      Email: ${customerInfo?.email}%0A
      Phone: ${customerInfo?.phone}%0A
      Address: ${customerInfo?.address}, ${customerInfo?.city}, ${customerInfo?.zipCode}%0A%0A
      Subtotal: $${total.toFixed(2)}%0A
      Tax: $${tax.toFixed(2)}%0A
      Total: $${finalTotal.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    console.log(whatsappUrl);
    window.open(whatsappUrl, '_self');
  };

  return handleWhatsAppCheckout;
};

export default useWhatsAppCheckout;