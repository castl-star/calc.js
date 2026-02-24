function calc(action, num1, num2) {
    switch (action) {
        case 'add':
            return num1 + num2;
        case 'multi':
            return num1 * num2;
        case 'substract':
            return num1 - num2;
        case 'correct':
            return num1 / num2;
        default:
            return NaN;
    }
}

if (typeof document !== 'undefined') {
    const frame = document.createElement('div');
    frame.style.border = '2px solid #4a5568';
    frame.style.borderRadius = '8px';
    frame.style.padding = '12px';
    frame.style.maxWidth = '360px';
    frame.style.margin = '20px auto';
    frame.style.background = '#f7fafc';

    const label = document.createElement('label');
    label.setAttribute('for', 'text-input');
    label.textContent = 'Введите текст:';
    label.style.display = 'block';
    label.style.marginBottom = '8px';
    label.style.fontFamily = 'sans-serif';

    const input = document.createElement('input');
    input.id = 'text-input';
    input.type = 'text';
    input.placeholder = 'Напишите что-нибудь...';
    input.style.width = '100%';
    input.style.boxSizing = 'border-box';
    input.style.padding = '10px';
    input.style.border = '1px solid #a0aec0';
    input.style.borderRadius = '6px';
    input.style.fontSize = '14px';

    frame.append(label, input);
    document.body.appendChild(frame);
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('substract', 4, 2));
