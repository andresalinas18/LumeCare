import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';
import emailjs from '@emailjs/browser';

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

jest.mock('@emailjs/browser', () => ({
  __esModule: true,
  default: { sendForm: jest.fn() },
  sendForm: jest.fn(),
}));

describe('ContactForm', () => {
  beforeEach(() => {
    window.alert = jest.fn();
    jest.clearAllMocks();
  });

  it('alerts and does not send form without consent', () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: 'contact.submit' });
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('contact.alertConsent');
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });
});
