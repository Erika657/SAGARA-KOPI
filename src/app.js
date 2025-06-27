document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Kopi Songlim", img: "Kopi Songlim.jpg", price: 90000 },
      { id: 2, name: "Kopi-Abang", img: "Kopi-Abang.jpg", price: 70000 },
      { id: 3, name: "Fakoe kopi", img: "Fakoe kopi.jpg", price: 80000 },
      { id: 4, name: "Kopi-Jahe", img: "Kopi-Jahe.jpg", price: 80000 },
      {
        id: 5,
        name: "Willies Roastery",
        img: "Willies Roastery.jpg",
        price: 90000,
      },
    ],
  }));
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    },
  });
});
// konversi ke rupiahAdd commentMore actions
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
