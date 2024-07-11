/// <reference types = "cypress"/>

describe("template spec", () => {
  it("Buy a tour from Alibaba", () => {
    cy.visit("https://www.alibaba.ir");
    cy.viewport(1920, 1080);
    // Login
    cy.get(".gap-3 > div.relative > .btn").click();
    cy.get(".text-center > .is-md").click();
    cy.get("form.auth-form input:nth-child(1)")
      .click({ force: true })
      .type("mahdisamadi5459@gmail.com");
    cy.get("form.auth-form input:nth-child(2)")
      .click({ force: true })
      .type("qwe123!@#");
    cy.get(".auth-actions > .is-solid-secondary").click();
    // cy.wait(5000);
    // select Tour
    cy.get(":nth-child(5) > .tab-links-item").should("be.visible").click();
    //Select items from the form
    cy.contains("مبدا (شهر)").should("be.visible").click();
    cy.contains("تهران").should("be.visible").click();
    cy.wait(2000);
    // cy.get(".is-active").eq(3).click();
    cy.contains("مشهد").should("be.visible").click();
    // select 3 night vacetion
    cy.get(".block.font-medium.text-3").eq(2).click();
    // cy.contains("تعطیلات آخر هفته (3 شب)").click();
    //Confirm date
    cy.get("button.btn.is-nl.is-solid-secondary.px-6").click();
    // number of people
    cy.get("button.btn.is-sm.is-solid-secondary.p-0").eq(1).click();
    // Confirmation of passengers
    cy.get("button.btn.is-lg.is-solid-secondary.is-block.text-3").click();
    // search
    cy.get("button.btn.is-lg.is-solid-primary.is-block.h-full").click();
    cy.wait(10000);
    cy.contains("محل اقامت مورد نظر برای تور خود را انتخاب کنید").should(
      "exist"
    );

    // select hotel tour
    cy.get("button.btn.is-md.is-solid-secondary.is-block.mb-2.text-callout")
      .eq(0)
      .invoke("removeAttr", "target", "_self")
      .click();
    //Because of going to a new tab, the link of this tab has been inserted into the code, please return to the Cypress page manually when you reach this part.
    cy.visit(
      "https://www.alibaba.ir/tour/iran-tehran/iran-mashhad/24557?from=2024-06-27&to=2024-06-30&rooms=1"
    );
    cy.wait(5000);
    cy.contains("اشتراک گذاری تورهای این هتل").should("exist");
    cy.get("button.btn.is-md.is-solid-secondary.my-2")
      .first()
      .click({ force: true });
    cy.wait(5000);
    cy.contains("مشخصات مسافران").should("exist");

    // Fill in passenger details
    cy.contains("نام لاتین").click().type("mahdi");
    cy.contains("نام خانوادگی لاتین").click().type("samadi");
    cy.get(".a-input__input").eq(2).type("مهدی");
    cy.get(".a-input__input").eq(3).type("صمدی");
    cy.contains("جنسیت").click();
    cy.contains("مرد").click();
    cy.get(".a-input__input").eq(5).type("0018291971");
    cy.contains("روز").click();
    cy.get(".block.px-4.py-3").first().click();
    cy.contains("ماه").click();
    cy.get(".block.px-4.py-3").first().click();
    cy.get(".a-input.relative.has-append.is-lg").last().click();
    cy.get(".block.px-4.py-3").eq(2).click();
    //Confirm and continue the purchase
    cy.get("button.btn.is-lg.is-solid-secondary.is-block.mb-safe").click();
    cy.wait(5000);
    cy.contains("اطلاعات بلیط").should("exist");
    //online payment
    cy.contains("پرداخت آنلاین").click();

    // cy.contains("۱۳۹۰").click();
    // cy.contains("نام").click().type("مهدی");
    // cy.contains("نام خانوادگی").click().type("صمدی");
    // cy.get(".a-input__input").eq(6).type("۱");
    // cy.contains("کد ملی").click().type("0018291971");

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

    //     cy.wrap(element).type(texts[index]);
    //   } else {

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

    // cy.get(".passenger-field-col.my-4.lg:my-5.md:pl-4.relative")
    //   .children(".a-input__input input")
    //   .click()
    //   .type("mahdi");
  });
});
