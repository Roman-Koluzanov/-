// Функция для вычисления дискриминанта
function calculateDiscriminant(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  return discriminant;
}

// Получение коэффициентов от пользователя
let a = parseFloat(prompt("Введите коэффициент a:"));
let b = parseFloat(prompt("Введите коэффициент b:"));
let c = parseFloat(prompt("Введите коэффициент c:"));

// Вычисление дискриминанта
const discr = calculateDiscriminant(a, b, c);

// Вывод результата в диалоговом окне
alert("Дискриминант D = " + discr);
