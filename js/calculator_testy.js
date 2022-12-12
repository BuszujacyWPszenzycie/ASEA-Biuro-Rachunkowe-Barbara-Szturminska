const inputNumberOfDocuments = document.querySelector('.number-of-documents')
const selectAccountingForm = document.querySelector('.select-accounting-form')
const inputNumberOfEmployees = document.querySelector('.number-of-employees')
const inputNumberOfCivilContracts = document.querySelector('.number-of-civil-contracts')
const checkboxVAT = document.querySelector('.checkbox-VAT')
const checkboxVATUE = document.querySelector('.checkbox-VAT-UE')
const countBtn = document.querySelector('.count-btn')
const clearBtn = document.querySelector('.clear-btn')
const paragraphPrice = document.querySelector('.paragraph-price')
const spanPrice = document.querySelector('.span-price')
const divWarrningArray = document.querySelectorAll('.div-warrning')

const basicAccountingPrice = 150
const lumpSumOnRevenuesPrice = 130
const taxCardPrice = 110
const fullAccountingPrice = 500
const priceForDocumentSimpifiedAccounting = 3
const priceForDocumentSimpifiedAccountingWithVAT = 4
const priceForDocumentFullAccounting = 5
const priceForDocumentFullAccountingWithVAT = 6
const priceForEmployee = 100
const priceForCivilContrct = 70
const priceForVATUE = 50

const basicAccountingFunction = () => {
	if (checkboxVAT.checked == true && checkboxVATUE.checked == true) {
		totalPrice =
			basicAccountingPrice +
			inputNumberOfDocuments.value * 1 * priceForDocumentSimpifiedAccountingWithVAT +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct +
			priceForVATUE
	} else if (checkboxVAT.checked == true && checkboxVATUE.checked == false) {
		totalPrice =
			basicAccountingPrice +
			inputNumberOfDocuments.value * 1 * priceForDocumentSimpifiedAccountingWithVAT +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct
	} else if (checkboxVAT.checked == false && checkboxVATUE.checked == true) {
		totalPrice =
			basicAccountingPrice +
			inputNumberOfDocuments.value * 1 * priceForDocumentSimpifiedAccounting +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct +
			priceForVATUE
	} else if (checkboxVAT.checked == false && checkboxVATUE.checked == false) {
		totalPrice =
			basicAccountingPrice +
			inputNumberOfDocuments.value * 1 * priceForDocumentSimpifiedAccounting +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct
	}

	spanPrice.textContent = totalPrice
}

const lumpSumAccountingFunction = () => {
	if (checkboxVAT.checked == true && checkboxVATUE.checked == true) {
		totalPrice =
			lumpSumOnRevenuesPrice +
			inputNumberOfDocuments.value * 1 * priceForDocumentSimpifiedAccountingWithVAT +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct +
			priceForVATUE
	} else if (checkboxVAT.checked == true && checkboxVATUE.checked == false) {
		totalPrice =
			lumpSumOnRevenuesPrice +
			inputNumberOfDocuments.value * 1 * priceForDocumentSimpifiedAccountingWithVAT +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct
	} else if (checkboxVAT.checked == false && checkboxVATUE.checked == true) {
		totalPrice =
			lumpSumOnRevenuesPrice +
			inputNumberOfDocuments.value * 1 * priceForDocumentSimpifiedAccounting +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct +
			priceForVATUE
	} else if (checkboxVAT.checked == false && checkboxVATUE.checked == false) {
		totalPrice =
			lumpSumOnRevenuesPrice +
			inputNumberOfDocuments.value * 1 * priceForDocumentSimpifiedAccounting +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct
	}

	spanPrice.textContent = totalPrice
}

const fullAccountingFunction = () => {
	if (checkboxVAT.checked == true && checkboxVATUE.checked == true) {
		totalPrice =
			fullAccountingPrice +
			inputNumberOfDocuments.value * 1 * priceForDocumentFullAccountingWithVAT +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct +
			priceForVATUE
	} else if (checkboxVAT.checked == true && checkboxVATUE.checked == false) {
		totalPrice =
			fullAccountingFunction +
			inputNumberOfDocuments.value * 1 * priceForDocumentFullAccountingWithVAT +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct
	} else if (checkboxVAT.checked == false && checkboxVATUE.checked == true) {
		totalPrice =
			fullAccountingFunction +
			inputNumberOfDocuments.value * 1 * priceForDocumentFullAccounting +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct +
			priceForVATUE
	} else if (checkboxVAT.checked == false && checkboxVATUE.checked == false) {
		totalPrice =
			fullAccountingFunction +
			inputNumberOfDocuments.value * 1 * priceForDocumentFullAccounting +
			inputNumberOfEmployees.value * 1 * priceForEmployee +
			inputNumberOfCivilContracts.value * 1 * priceForCivilContrct
	}

	spanPrice.textContent = totalPrice
}

const countPriceFunction = () => {
	inputNumberOfDocuments.classList.remove('border-warning')
	selectAccountingForm.classList.remove('border-warning')
	if (selectAccountingForm.value == '' && inputNumberOfDocuments.value == 0) {
		for (i = 0; i < divWarrningArray.length; i++) {
			const div = divWarrningArray[i]
			div.classList.add('show-warrning')
		}
		inputNumberOfDocuments.classList.add('border-warning')
		selectAccountingForm.classList.add('border-warning')
	} else if (selectAccountingForm.value != '' && inputNumberOfDocuments.value == 0) {
		for (i = 0; i < divWarrningArray.length; i++) {
			const div = divWarrningArray[0]
			div.classList.add('show-warrning')
		}
		inputNumberOfDocuments.classList.add('border-warning')
	} else if (selectAccountingForm.value == '' && inputNumberOfDocuments.value != 0) {
		for (i = 0; i < divWarrningArray.length; i++) {
			const div = divWarrningArray[1]
			div.classList.add('show-warrning')
		}
		selectAccountingForm.classList.add('border-warning')
	} else if (
		selectAccountingForm.value != '' &&
		inputNumberOfDocuments.value != 0 &&
		selectAccountingForm.value == 'KPiR'
	) {
		for (i = 0; i < divWarrningArray.length; i++) {
			const div = divWarrningArray[i]
			div.classList.remove('show-warrning')
		}

		paragraphPrice.classList.add('show-paragraph')
		basicAccountingFunction()
	} else if (
		selectAccountingForm.value != '' &&
		inputNumberOfDocuments.value != 0 &&
		selectAccountingForm.value == 'lump-sum-on-revenues'
	) {
		for (i = 0; i < divWarrningArray.length; i++) {
			const div = divWarrningArray[i]
			div.classList.remove('show-warrning')
		}
		paragraphPrice.classList.add('show-paragraph')
		lumpSumAccountingFunction()
	} else if (
		selectAccountingForm.value != '' &&
		inputNumberOfDocuments.value != 0 &&
		selectAccountingForm.value == 'full-accounting'
	) {
		for (i = 0; i < divWarrningArray.length; i++) {
			const div = divWarrningArray[i]
			div.classList.remove('show-warrning')
		}
		paragraphPrice.classList.add('show-paragraph')
		lumpSumAccountingFunction()
	}
}

const clearFieldsFunction = () => {
	inputNumberOfDocuments.value = ''
	selectAccountingForm.value = ''
	inputNumberOfEmployees.value = ''
	inputNumberOfCivilContracts.value = ''
	checkboxVAT.checked = false
	checkboxVATUE.checked = false

	paragraphPrice.classList.remove('show-paragraph')
	for (i = 0; i < divWarrningArray.length; i++) {
		const div = divWarrningArray[i]
		div.classList.remove('show-warrning')
	}
	inputNumberOfDocuments.classList.remove('border-warning')
	selectAccountingForm.classList.remove('border-warning')
}

countBtn.addEventListener('click', countPriceFunction)
clearBtn.addEventListener('click', clearFieldsFunction)
