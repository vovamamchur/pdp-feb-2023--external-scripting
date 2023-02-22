module.exports = () => {
  document && document.addEventListener("DOMContentLoaded", () => {
    console.info('# works');

    const root = document.createElement('div');
    root.style.cssText = 'position:absolute;bottom:20px;right:20px;';

    const button = document.createElement('div');
    button.id = 'feedback-button';
    button.style.cssText = 'height:40px;font-size:16px;line-height:40px;background-color:#1677ff;color:#ffffff;border-radius:20px;padding:0 20px;';
    button.innerText = 'Send feedback';

    const modal = document.createElement('div');
    modal.id = 'feedback-modal';
    modal.style.cssText = 'width:200px;height:200px;border:1px solid #1677ff;position:relative;';

    const modalCloseButton = document.createElement('div');
    modalCloseButton.id = 'modal-close-button';
    modalCloseButton.style.cssText = 'position:absolute;top:8px;right:8px;border:1px solid black;border-radius:2px;height:24px;width:24px;font-size:20px;line-height:24px;text-align:center;'
    modalCloseButton.innerText = 'X';

    const modalNameInput = document.createElement('input');
    modalNameInput.style.cssText = 'margin:40px 8px 0;width:calc(100% - 24px);';
    modalNameInput.placeholder = 'Your name';

    const modalFeedbackInput = document.createElement('textarea');
    modalFeedbackInput.style.cssText = 'margin:8px 8px 0;width:calc(100% - 22px);height: 80px;';
    modalFeedbackInput.placeholder = 'Your feedback';

    const modalSendButton = document.createElement('button');
    modalSendButton.style.cssText = 'margin:8px 8px 0;width:calc(100% - 16px);';
    modalSendButton.innerText = 'Send feedback';

    modal.appendChild(modalCloseButton);
    modal.appendChild(modalNameInput);
    modal.appendChild(modalFeedbackInput);
    modal.appendChild(modalSendButton);

    button.addEventListener('click', () => {
      button.remove();
      root.appendChild(modal);
    });

    modalCloseButton.addEventListener('click', () => {
      modalNameInput.value = '';
      modalFeedbackInput.value = '';

      modal.remove();
      root.appendChild(button);
    });

    modalSendButton.addEventListener('click', () => {
      modalNameInput.value = '';
      modalFeedbackInput.value = '';

      root.remove();
    });

    root.appendChild(button);

    document.body.appendChild(root);
  });
};
