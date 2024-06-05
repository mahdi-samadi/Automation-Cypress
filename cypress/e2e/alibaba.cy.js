/// <reference types = "cypress"/>

describe("template spec", () => {
  it("login", () => {
    cy.visit("https://www.alibaba.ir");
    cy.viewport(1920, 1080);
    cy.get(".gap-3 > div.relative > .btn").click();
    cy.get(".text-center > .is-md").click();

    cy.get("form.auth-form input:nth-child(1)")
      .click({ force: true })
      .type("mahdisamadi5459@gmail.com");
    cy.get("form.auth-form input:nth-child(2)")
      .click({ force: true })
      .type("qwe123!@#");
    cy.get(".auth-actions > .is-solid-secondary").click();

    cy.get(":nth-child(5) > .tab-links-item").click();
    cy.contains("مبدا (شهر)").click();
    cy.contains("تهران").click();
    cy.contains("مشهد").click();
    cy.contains("تعطیلات آخر هفته (3 شب)").click();
    cy.get("button.btn.is-nl.is-solid-secondary.px-6").click();
    // تعداد نفرات
    cy.get(
      "#app > div.bg-white.wrapper > main > div > div.a-container.px-0.pb-8 > div.a-card.products-box > div.tab-view.z-10 > div > form > div:nth-child(2) > div:nth-child(3) > div > div.v-dropdown.pretty-scroll.is-open.is-align-left > div > div.a-card__body.pretty-scroll > div > div:nth-child(2) > div.a-counter > button:nth-child(3)"
    ).click();
    cy.get("button.btn.is-lg.is-solid-secondary.is-block.text-3").click();
    // جستجو
    cy.get("button.btn.is-lg.is-solid-primary.is-block.h-full").click();
    cy.wait(8000);

    cy.get(
      "#app > div.wrapper > main > div > div > div > section > div:nth-child(6) > div:nth-child(1) > div > div > div.available-card__action.px-4 > button"
    )
      .invoke("removeAttr", "target", "_self")
      .click();

    // انتخاب تور
    cy.visit(
      "https://www.alibaba.ir/tour/iran-tehran/iran-mashhad/24557?from=2024-06-27&to=2024-06-30&rooms=1"
    );

    cy.get("button.btn.is-md.is-solid-secondary.my-2")
      .first()
      .click({ force: true });
    cy.wait(5000);

    // مشخصات مسافران

    // cy.get(".passenger-field-col.my-4.lg:my-5.md:pl-4.relative")
    //   .children(".a-input__input input")
    //   .click()
    //   .type("mahdi");

    cy.contains("نام لاتین").click().type("mahdi");
    cy.contains("نام خانوادگی لاتین").click().type("samadi");

    cy.get(".a-input__input").eq(2).type("مهدی");
    cy.get(".a-input__input").eq(3).type("صمدی");

    // cy.contains("نام").click().type("مهدی");
    // cy.contains("نام خانوادگی").click().type("صمدی");
    cy.contains("جنسیت").click();
    cy.contains("مرد").click();
    cy.get(".a-input__input").eq(5).type("0018291971");
    // cy.get(".a-input__input").eq(6).type("۱");
    // cy.contains("کد ملی").click().type("0018291971");

    // cy.get("");
    cy.contains("روز").click();
    cy.get(".block.px-4.py-3").first().click();
    cy.contains("ماه").click();
    cy.get(".block.px-4.py-3").first().click();
    cy.get(".a-input.relative.has-append.is-lg").last().click();
    cy.get(".block.px-4.py-3").eq(2).click();

    // تایید و ادامه خرید
    cy.get("button.btn.is-lg.is-solid-secondary.is-block.mb-safe").click();
    cy.wait(5000);
    // پرداخت آنلاین
    cy.contains("پرداخت آنلاین").click();
    // cy.contains("۱۳۹۰").click();

    // let texts = [
    //   "mahdi",
    //   "samadi",
    //   "مهدی",
    //   "صمدی",
    //   "مرد",
    //   "0018291971",
    //   "1",
    //   "مرداد",
    //   "1374",
    // ];

    // cy.get(".a-input__input").each((element, index) => {
    //   if (index === 0) {
    //     // فقط برای اولین المان تایپ کن
    //     cy.wrap(element).type(texts[index]);
    //   } else {
    //     // برای المانهای بعدی، ابتدا کلیک کن و سپس تایپ کن
    //     cy.wrap(element)
    //       .click()
    //       .then(() => {
    //         cy.wrap(element).type(texts[index]);
    //       });
    //   }
    // });

    // cy.get(".a-input__input").eq(0).type("Mahdi");
    // cy.get(".a-input__input").eq(1).type("Samadi");
    // cy.get(".a-input__input").eq(2).type("مهدی");
    // cy.get(".a-input__input").eq(3).type("صمدی");
    // cy.get(".a-input__input").eq(4).type("مرد");
    // cy.get(".a-input__input").eq(5).type("0018291971");
    // cy.get(".a-input__input").eq(6).type("1");
    // cy.get(".a-input__input").eq(7).type("فروردین");
    // cy.get(".a-input__input").eq(8).type("1374");
    // cy.get(
    //   "#app > div.wrapper > main > div > div > div > section > div:nth-child(6) > div:nth-child(1) > div > div > div.available-card__action.px-4 > button"
    // ).trigger("click", { force: true });

    // cy.get(".is-focus > a > .destination-item").click();
    // cy.get("form input:nth-child(3)").click({ force: true });
  });
});
