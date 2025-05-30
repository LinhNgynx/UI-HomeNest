function scrollCards(direction) {
    const container = document.querySelector('.hn-pricing-cards-wrapper');
    const scrollAmount = 380; // adjust based on card width
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.hn-pricing-cards');

  const pricingPlans = [
  {
    title: "Basic",
    color: "#2db5b1",
    description: "Gói Basic tại HomeNest mang đến website chuyên nghiệp với thiết kế đơn.",
    features: [
      "Giao diện đa dạng có sẵn",
      "Đầy đủ chức năng cơ bản",
      "Thiết kế chuẩn SEO",
      "Công cụ hỗ trợ SEO Google",
      "Hướng dẫn quản trị website",
      "Hỗ trợ live chat, fanpage, Google map...",
      "Miễn phí bảo mật SSL năm đầu"
    ],
    price: "8.000.000",
    typeClass: "basic"
  },
  {
    title: "Golden",
    color: "#fd7401",
    description: "Gói Golden tại HomeNest mang đến website cao cấp với thiết kế tinh xảo.",
    features: [
      "Giao diện theo mẫu hoặc theo yêu cầu",
      "Chức năng nâng cao",
      "Website song ngữ",
      "Thiết kế chuẩn SEO",
      "Công cụ hỗ trợ SEO Google",
      "Thiết kế Figma: 1",
      "Giao diện chuẩn UI/UX"
    ],
    price: "16.000.000",
    typeClass: "golden"
  },
  {
    title: "Diamond",
    color: "#020c6a",
    description: "Gói Diamond tại HomeNest cung cấp website đỉnh cao với thiết kế hoàn hảo.",
    features: [
      "Giao diện độc quyền theo thương hiệu",
      "Chức năng theo nhu cầu",
      "Website đa ngôn ngữ",
      "Thiết kế chuẩn SEO",
      "Công cụ hỗ trợ SEO Google",
      "Thiết kế Figma: 2",
      "Giao diện chuẩn UI/UX"
    ],
    price: "40.000.000",
    typeClass: "diamond"
  },
  {
    title: "Platinum",
    color: "#972295",
    description: "Gói Platinum tại HomeNest mang đến website tối ưu với thiết kế sang trọng.",
    features: [
      "Giao diện độc quyền theo thương hiệu",
      "Chức năng theo nhu cầu",
      "Website đa ngôn ngữ",
      "Thiết kế chuẩn SEO",
      "Công cụ hỗ trợ SEO Google",
      "Thiết kế Figma: 3",
      "Giao diện chuẩn UI/UX"
    ],
    price: "Linh hoạt",
    typeClass: "platinum"
  }
];


  pricingPlans.forEach(plan => {
    const card = document.createElement('div');
    card.className = `hn-card hn-card--${plan.typeClass}`;
    card.innerHTML = `
      <div class="hn-card__header">${plan.title}</div>
      <div style="margin-top: 30px; margin-bottom: 30px;">
        <p><span class="black_normal" style="font-weight: 300;">
          <span style="color: ${plan.color}; font-weight: bold;">Gói ${plan.title}</span> ${plan.description}
        </span></p>
      </div>
      <div class="elementor-divider"><span class="elementor-divider-separator"></span></div>
      <div class="hn-card__body">
        <ul class="hn-card__features" style="margin-top: 30px; margin-bottom: 30px;">
          ${plan.features.map(f => `<li>${f}</li>`).join("")}
          <li><a href="#" class="hn-card__link">Xem thêm</a></li>
        </ul>
      </div>
      <div class="elementor-divider"><span class="elementor-divider-separator"></span></div>
      <div class="hn-card__footer">
        <button class="hn-card__button">
          <div><img src="https://homenest.media/wp-content/uploads/2025/02/Icon-Call-Homenest.media_.svg" alt></div>
        </button>
        <div class="hn-card__price">${plan.price}</div>
      </div>
    `;
    container.appendChild(card);
  });
});
