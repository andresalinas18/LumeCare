import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "../ContactForm";
import emailjs from "@emailjs/browser";

jest.mock("next-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

jest.mock("@emailjs/browser", () => ({
  __esModule: true,
  default: {
    sendForm: jest.fn(),
  },
}));

describe("ContactForm", () => {
  test("alerts and avoids sending when consent is missing", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    const { container } = render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText("contact.firstName"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("contact.lastName"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("contact.phone"), {
      target: { value: "1234567890" },
    });

    const form = container.querySelector("form");
    fireEvent.submit(form);

    expect(alertMock).toHaveBeenCalled();
    expect(emailjs.sendForm).not.toHaveBeenCalled();

    alertMock.mockRestore();
  });
});
