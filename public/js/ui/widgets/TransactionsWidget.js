/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Переданный элемент не существует');
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const newIncomeButton = document.querySelector('.create-income-button');
    const newExpenseButton = document.querySelector('.create-expense-button');
    newIncomeButton.addEventListener('click', () => {
      const modal = App.getModal('newIncome');
      modal.open();
    });
    newExpenseButton.addEventListener('click', () => {
      const modal = App.getModal('newExpense');
      modal.open();
    });
  }
}
