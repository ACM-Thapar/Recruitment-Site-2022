import React from 'react'
import { Fragment } from 'react'
import './RecruitmentForm.css'

function RecruitmentForm() {
  return (
    <Fragment>
      <style
        type="text/css"
        id="form-designer-style"
        dangerouslySetInnerHTML={{
          __html:
            '\n    /* Injected CSS Code */\n\n  /*PREFERENCES STYLE*/\n  /* NEW THEME STYLE */\n\n  /* colors */\n\n  .form-textbox, .form-textarea {\n    color: undefined;\n  }\n  .rating-item input:hover+label {\n    color: rgba(17, 17, 27, 0.75);\n  }\n  li[data-type=control_fileupload] .qq-upload-button,\n  .until-text,\n  .form-submit-reset {\n    color: rgba(17, 17, 27, 0.75);\n  }\n\n  .stageEmpty{\n    color: #FFFFFF;\n  }\n\n  .rating-item label {\n    color: rgba(17, 17, 27, 0.75);\n  }\n  .currentDate,\n  .pickerItem select,\n  .appointmentCalendar .calendarDay,\n  .calendar.popup th,\n  .calendar.popup table tbody td,\n  .calendar-new-header>*,\n  .form-collapse-table {\n    color: #FFFFFF;\n  }\n  .appointmentCalendar .dayOfWeek {\n    color: #FFFFFF;\n  }\n  .appointmentSlotsContainer > * {\n    color: rgba(17, 17, 27, 0.75);\n  }\n  li[data-type=control_fileupload] .jfUpload-heading,\n  ::placeholder,\n  .form-dropdown.is-active,\n  .form-dropdown:first-child,\n  .form-spinner-input {\n    color: #1A1F2F;\n  }\n  .appointmentCalendar .calendarWeek .calendarDay.isUnavailable,\n  .calendar tr.days td.otherDay,\n  .calendar tr.days td:hover:not(.unselectable) {\n    color: #1A1F2F;\n  }\n  span.form-sub-label, label.form-sub-label, div.form-header-group .form-subHeader,\n  .rating-item-title.for-to > label:first-child,\n  .rating-item-title.for-from > label:first-child,\n  .rating-item-title .editor-container * {\n    color: #838895;\n  }\n  .form-pagebreak-back{\n    color: #FFFFFF;\n  }\n  .rating-item input:checked+label,\n  .rating-item input:focus+label {\n    color: #FFFFFF;\n  }\n  .clear-pad-btn {\n    color: #FFFFFF;\n  }\n  .form-textbox::placeholder,\n  .form-dropdown:not(.time-dropdown):not(:required),\n  .form-dropdown:not(:required),\n  .form-dropdown:required:invalid {\n    color: #1A1F2F;\n  }\n  /* border-colors */\n  .form-dropdown,\n  .form-textarea,\n  .form-textbox,\n  li[data-type=control_fileupload] .qq-upload-button,\n  .rating-item label,\n  .rating-item input:focus+label,\n  .rating-item input:checked+label,\n  .jf-form-buttons,\n  .form-checkbox+label:before, .form-checkbox+span:before, .form-radio+label:before, .form-radio+span:before,\n  .signature-pad-passive,\n  .signature-wrapper,\n  .appointmentCalendarContainer,\n  .appointmentField .timezonePickerName,\n  .appointmentDayPickerButton,\n  .appointmentCalendarContainer .monthYearPicker .pickerItem+.pickerItem,\n  .appointmentCalendarContainer .monthYearPicker,\n  .appointmentCalendar .calendarDay.isActive .calendarDayEach, .appointmentCalendar .calendarDay.isToday .calendarDayEach, .appointmentCalendar .calendarDay:not(.empty):hover .calendarDayEach,\n  .calendar.popup:before,\n  .calendar-new-month,\n  .form-matrix-column-headers, .form-matrix-table td, .form-matrix-table td:last-child,\n  .form-matrix-table th, .form-matrix-table th:last-child, .form-matrix-table tr:last-child td, .form-matrix-table tr:last-child th, .form-matrix-table tr:not([role=group])+tr[role=group] th,\n  .form-matrix-headers.form-matrix-column-headers,\n  .isSelected .form-matrix-column-headers:nth-last-of-type(2),\n  li[data-type=control_inline] input[type=email], li[data-type=control_inline] input[type=number],\n  li[data-type=control_inline] input[type=tel], li[data-type=control_inline] input[type=text] {\n    border-color: rgba(17, 17, 27, 0.75);\n  }\n  .stageEmpty {\n    border-color: rgba(17, 17, 27, 0.75);\n  }\n  .rating-item input:hover+label {\n    border-color: rgba(17, 17, 27, 0.75);\n  }\n  .appointmentSlot,\n  .form-checkbox:checked+label:before, .form-checkbox:checked+span:before, .form-checkbox:checked+span label:before,\n  .form-radio:checked+label:before, .form-radio:checked+span:before,\n  .form-dropdown:focus, .form-textarea:focus, .form-textbox:focus, .signature-wrapper:focus,\n  .form-line[data-payment="true"] .form-product-item .p_checkbox .checked,\n  .form-dropdown:hover, .form-textarea:hover, .form-textbox:hover, .signature-wrapper:hover {\n    border-color: rgba(17, 17, 27, 0.75);\n  }\n\n  .calendar tr.days td:hover:not(.unselectable):after {\n    border-color: #1A1F2F;\n  }\n  .form-header-group,\n  .form-buttons-wrapper, .form-pagebreak, .form-submit-clear-wrapper,\n  .form-pagebreak-next,\n  .form-pagebreak-back,\n  .form-checkbox:hover+label:before, .form-checkbox:hover+span:before, .form-radio:hover+label:before, .form-radio:hover+span:before,\n  .divider {\n    border-color: #11111B;\n  }\n  .form-pagebreak-back:focus, .form-pagebreak-next:focus, .form-submit-button:focus {\n    border-color: rgba(17, 17, 27, 1);\n  }\n  /* background-colors */\n  .form-line-active {\n    background-color: #4F5B77;\n  }\n  .stageEmpty {\n    background-color:  #11111B;\n  }\n  .form-line-error {\n    background-color: #642733;\n  }\n  .form-matrix-column-headers, .form-matrix-row-headers,\n  .form-spinner-button-container>*,\n  .form-collapse-table,\n  .form-collapse-table:hover,\n  .appointmentDayPickerButton {\n    background-color: #1A1F2F;\n  }\n  .calendar.popup, .calendar.popup table,\n  .calendar.popup table tbody td:after{\n    background-color: #424756;\n  }\n\n  .appointmentCalendar .calendarDay.isActive .calendarDayEach,\n  .appointmentFieldRow.forSelectedDate,\n  .calendar.popup tr.days td.selected:after,\n  .calendar.popup:after,\n  .submit-button,\n  .form-checkbox:checked+label:before, .form-checkbox:checked+span:before, .form-checkbox:checked+span label:before,\n  .form-radio+label:after, .form-radio+span:after,\n  .rating-item input:checked+label,\n  .appointmentCalendar .calendarDay:after,\n  .form-line[data-payment="true"] .form-product-item .p_checkbox .checked,\n  .rating-item input:focus+label {\n    background-color: #2E69FF;\n  }\n  .appointmentSlot.active {\n    background-color: #2E69FF !important;\n  }\n  .clear-pad-btn,\n  .appointmentCalendar .dayOfWeek,\n  .calendar.popup th {\n    background-color: #11111B !important;\n  }\n  .appointmentField .timezonePicker:hover+.timezonePickerName,\n  .form-spinner-button-container>*:hover {\n    background-color: #96B4FF;\n  }\n  .form-matrix-values,\n  .form-matrix-values,\n  .signature-wrapper,\n  .signature-pad-passive,\n  .rating-item label,\n  .form-checkbox+label:before, .form-checkbox+span:before,\n  .form-radio+label:before, .form-radio+span:before {\n    background-color: #838895;\n  }\n  li[data-type=control_fileupload] .qq-upload-button {\n    background-color: #838895;\n  }\n  .JotFormBuilder .appContainer #app li.form-line[data-type=control_matrix].isSelected\n  .questionLine-editButton.forRemove:after, \n  .JotFormBuilder .appContainer #app li.form-line[data-type=control_matrix].isSelected .questionLine-editButton.forRemove:before {\n    background-color: #FFFFFF;\n  }\n  .appointmentCalendarContainer, .appointmentSlot,\n  .rating-item-title.for-to > label:first-child,\n  .rating-item-title.for-from > label:first-child,\n  .rating-item-title .editor-container *,\n  .calendar-opened {\n    background-color: transparent;\n  }\n  .page-section li.form-line-active[data-type="control_button"] {\n    background-color: #4F5B77;\n  }\n  .appointmentCalendar .calendarDay.isSelected:after {\n    color: #838895;\n  }\n  /* shadow */\n  .form-dropdown:hover, .form-textarea:hover, .form-textbox:hover, .signature-wrapper:hover,\n  .calendar.popup:before,\n  .jSignature:hover,\n  li[data-type=control_fileupload] .qq-upload-button-hover,\n  .form-line[data-payment="true"] .form-product-item .p_checkbox .checked,\n  .form-line[data-payment="true"] .form-product-item .p_checkbox:hover .select_border,\n  .form-checkbox:hover+label:before, .form-checkbox:hover+span:before, .form-radio:hover+label:before, .form-radio:hover+span:before,\n  .calendar.popup:before {\n    border-color: rgba(17, 17, 27, 0.5);\n    box-shadow: 0 0 0 2px rgba(17, 17, 27, 0.25);\n  }\n  .form-dropdown:focus, .form-textarea:focus, .form-textbox:focus, .signature-wrapper:focus,\n  li[data-type=control_fileupload] .qq-upload-button-focus,\n  .form-checkbox:focus+label:before, .form-checkbox:focus+span:before, .form-radio:focus+label:before, .form-radio:focus+span:before,\n  .calendar.popup:before {\n    border-color: rgba(17, 17, 27, 1);\n    box-shadow: 0 0 0 3px rgba(17, 17, 27, 0.25);\n  }\n  .calendar.popup table tbody td{\n    box-shadow: none;\n  }\n\n  /* button colors */\n  .submit-button {\n    background-color: #2E69FF;\n    border-color: #2E69FF;\n  }\n  .submit-button:hover {\n    background-color: #1C3F99;\n    border-color: #1C3F99;\n  }\n  .form-pagebreak-next {\n    background-color: #11111B;\n  }\n  .form-pagebreak-back {\n    background-color: #11111B;\n  }\n  .form-pagebreak-back:hover {\n    background-color: #11141C;\n    border-color: #11141C;\n  }\n  .form-pagebreak-next:hover {\n    background-color: #11141C;\n    border-color: #11141C;\n  }\n  .form-sacl-button, .form-submit-print {\n    background-color: transparent;\n    color: rgba(17, 17, 27, 0.75);\n    border-color: rgba(17, 17, 27, 0.75);\n  }\n  .form-sacl-button:hover, .form-submit-print:hover,\n  .appointmentSlot:not(.disabled):not(.active):hover,\n  .appointmentDayPickerButton:hover,\n  .rating-item input:hover+label {\n    background-color: #96B4FF;\n  }\n\n  /* payment styles */\n  \n  .form-line[data-payment=true] .form-textbox,\n  .form-line[data-payment=true] .select-area,\n  .form-line[data-payment=true] #coupon-input,\n  .form-line[data-payment=true] #coupon-container input,\n  .form-line[data-payment=true] input#productSearch-input,\n  .form-line[data-payment=true] .form-product-category-item:after,\n  .form-line[data-payment=true] .filter-container .dropdown-container .select-content,\n  .form-line[data-payment=true] .form-textbox.form-product-custom_quantity,\n  .form-line[data-payment="true"] .form-product-item .p_checkbox .select_border,\n  .form-line[data-payment="true"] .form-product-item .form-product-container .form-sub-label-container span.select_cont,\n  .form-line[data-payment=true] select.form-dropdown,\n  .form-line[data-payment=true] #payment-category-dropdown .select-area,\n  .form-line[data-payment=true] #payment-sorting-products-dropdown .select-area,\n  .form-line[data-payment=true] .dropdown-container .select-content {\n    border-color: rgba(17, 17, 27, 0.75);\n    border-color: rgba(17,17,27,.7);\n  }\n  .form-line[data-payment="true"] hr,\n  .form-line[data-payment=true] .p_item_separator,\n  .form-line[data-payment="true"] .payment_footer.new_ui,\n  .form-line.card-3col .form-product-item.new_ui,\n  .form-line.card-2col .form-product-item.new_ui {\n    border-color: rgba(17, 17, 27, 0.75);\n    border-color: rgba(17,17,27,.4);\n  }\n  .form-line[data-payment=true] .form-product-category-item {\n    border-color: rgba(17, 17, 27, 0.75);\n    border-color: undefined;\n  }\n  .form-line[data-payment=true] #coupon-input,\n  .form-line[data-payment=true] .form-textbox.form-product-custom_quantity,\n  .form-line[data-payment=true] input#productSearch-input,\n  .form-line[data-payment=true] .select-area,\n  .form-line[data-payment=true] .custom_quantity,\n  .form-line[data-payment=true] .filter-container .select-content,\n  .form-line[data-payment=true] .p_checkbox .select_border,\n  .form-line[data-payment=true] #payment-category-dropdown .select-area,\n  .form-line[data-payment=true] #payment-sorting-products-dropdown .select-area,\n  .form-line[data-payment=true] .dropdown-container .select-content {\n    background-color: #838895;\n  }\n  .form-line[data-payment=true] .form-product-category-item.title_collapsed.has_selected_product .selected-items-icon {\n   background-color: #11111B;\n   border-color: #11111B;\n  }\n  .form-line[data-payment=true].form-line.card-3col .form-product-item,\n  .form-line[data-payment=true].form-line.card-2col .form-product-item {\n   background-color: rgba(0,0,0,.05);\n  }\n  .form-line[data-payment=true] .payment-form-table input.form-textbox,\n  .form-line[data-payment=true] .payment-form-table input.form-dropdown,\n  .form-line[data-payment=true] .payment-form-table .form-sub-label-container > div,\n  .form-line[data-payment=true] .payment-form-table span.form-sub-label-container iframe,\n  .form-line[data-type=control_square] .payment-form-table span.form-sub-label-container iframe {\n    border-color: rgba(17, 17, 27, 0.75);\n  }\n\n  /* icons */\n  .appointmentField .timezonePickerName:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDcuOTYwMkMwIDMuNTY2MTcgMy41NTgyMSAwIDcuOTUyMjQgMEMxMi4zNTQyIDAgMTUuOTIwNCAzLjU2NjE3IDE1LjkyMDQgNy45NjAyQzE1LjkyMDQgMTIuMzU0MiAxMi4zNTQyIDE1LjkyMDQgNy45NTIyNCAxNS45MjA0QzMuNTU4MjEgMTUuOTIwNCAwIDEyLjM1NDIgMCA3Ljk2MDJaTTEuNTkzNzUgNy45NjAyQzEuNTkzNzUgMTEuNDc4NiA0LjQ0MzUgMTQuMzI4NCA3Ljk2MTkxIDE0LjMyODRDMTEuNDgwMyAxNC4zMjg0IDE0LjMzMDEgMTEuNDc4NiAxNC4zMzAxIDcuOTYwMkMxNC4zMzAxIDQuNDQxNzkgMTEuNDgwMyAxLjU5MjA0IDcuOTYxOTEgMS41OTIwNEM0LjQ0MzUgMS41OTIwNCAxLjU5Mzc1IDQuNDQxNzkgMS41OTM3NSA3Ljk2MDJaIiBmaWxsPSIjODM4ODk1Ii8+CjxwYXRoIGQ9Ik04LjM1ODA5IDMuOTc5OThINy4xNjQwNlY4Ljc1NjFMMTEuMzQzMiAxMS4yNjM2TDExLjk0MDIgMTAuMjg0NUw4LjM1ODA5IDguMTU5MDhWMy45Nzk5OFoiIGZpbGw9IiM4Mzg4OTUiLz4KPC9zdmc+Cg==);\n  }\n  .appointmentCalendarContainer .monthYearPicker .pickerArrow.prev:after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04LjU5NzgyIDUuMzM2NjRDOC45MzMxMiA1LjY0MDE4IDkuNDM5MzkgNS42MzM2IDkuNzU2MTMgNS4zMTY2OUMxMC4wODEzIDQuOTkxMzYgMTAuMDgxMyA0LjQ2MzU0IDkuNzU2MTMgNC4xMzgyMUM5LjYwOTA0IDQuMDAwMjYgOS42MDkwMyA0LjAwMDI2IDkuMDg5NDkgMy41MTUwOUM4LjQzNzQyIDIuOTA2MDkgOC40Mzc0MyAyLjkwNjA5IDcuNjU1MTEgMi4xNzU0N0M2LjA4OTU2IDAuNzEzMzUzIDYuMDg5NTYgMC43MTMzNTIgNS41Njc3MyAwLjIyNjAwN0M1LjI0MTA0IC0wLjA3MDYwMDUgNC43NTA4NSAtMC4wNjk1OTY3IDQuNDMyMzUgMC4yMjU4MzVMMC4yNjI1NCA0LjExODE1Qy0wLjA4MDU0NTkgNC40NTkzNiAtMC4wODcxNzExIDQuOTg3ODggMC4yNDE0NjggNS4zMTY2OUMwLjU1OTU1OCA1LjYzNDk2IDEuMDY5NzUgNS42NDA1OSAxLjM5NzAzIDUuMzM2NTNMNC45OTg5MSAxLjk3NTIyTDguNTk3ODIgNS4zMzY2NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=);\n  }\n  .appointmentCalendarContainer .monthYearPicker .pickerArrow.next:after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjQwMjE4IDAuMjI2OTE1QzEuMDY2ODcgLTAuMDc2Njg0OSAwLjU2MDYwMiAtMC4wNzAwODQ5IDAuMjQzODY5IDAuMjQ2ODE1Qy0wLjA4MTI4OTggMC41NzIxMTUgLTAuMDgxMjg5OCAxLjEwMDAyIDAuMjQzODY5IDEuNDI1MzJDMC4zOTA5NTYgMS41NjMyMiAwLjM5MDk2NiAxLjU2MzIyIDAuOTEwNTEgMi4wNDg0MkMxLjU2MjU3IDIuNjU3NDIgMS41NjI1NiAyLjY1NzQxIDIuMzQ0ODggMy4zODgwMkMzLjkxMDQ0IDQuODUwMTEgMy45MTA0MyA0Ljg1MDEyIDQuNDMyMjcgNS4zMzc1MkM0Ljc1ODk1IDUuNjM0MTIgNS4yNDkxNSA1LjYzMzEyIDUuNTY3NjQgNS4zMzc3Mkw5LjczNzQ2IDEuNDQ1NDJDMTAuMDgwNSAxLjEwNDEyIDEwLjA4NzEgMC41NzU2MTUgOS43NTg1MyAwLjI0NjgxNUM5LjQ0MDQ0IC0wLjA3MTQ4NDkgOC45MzAyNCAtMC4wNzcwODQ5IDguNjAyOTcgMC4yMjcwMTVMNS4wMDEwOCAzLjU4ODMyTDEuNDAyMTggMC4yMjY5MTVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);\n  }\n  .appointmentField .timezonePickerName:after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNSA1TDkgMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==);\n    width: 11px;\n  }\n  li[data-type=control_datetime] [data-wrapper-react=true].extended>div+.form-sub-label-container .form-textbox:placeholder-shown,\n  li[data-type=control_datetime] [data-wrapper-react=true]:not(.extended) .form-textbox:not(.time-dropdown):placeholder-shown,\n  .appointmentCalendarContainer .currentDate {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljk0ODkgNVYxNS4wMjZDMTUuOTQ4OSAxNS41NjM5IDE1LjUwMjYgMTYgMTQuOTUyMSAxNkgwLjk5NjgwNUMwLjQ0NjI4NSAxNiAwIDE1LjU2MzkgMCAxNS4wMjZWNUgxNS45NDg5Wk00LjE5MjQ1IDExLjQxNjdIMi4zNzQ3NEwyLjI4NTE1IDExLjQyNDdDMi4xMTA3OCAxMS40NTY1IDEuOTY4MDEgMTEuNTc5MiAxLjkwNzUyIDExLjc0MjJMMS44ODQzNyAxMS44MjY4TDEuODc2MzQgMTEuOTE2N1YxMy42NjY3TDEuODg0MzcgMTMuNzU2NUMxLjkxNjAyIDEzLjkzMTUgMi4wMzg0IDE0LjA3NDcgMi4yMDA4MyAxNC4xMzU0TDIuMjg1MTUgMTQuMTU4NkwyLjM3NDc0IDE0LjE2NjdINC4xOTI0NUw0LjI4MjAzIDE0LjE1ODZDNC40NTY0MSAxNC4xMjY5IDQuNTk5MTggMTQuMDA0MSA0LjY1OTY3IDEzLjg0MTFMNC42ODI4MiAxMy43NTY1TDQuNjkwODUgMTMuNjY2N1YxMS45MTY3TDQuNjgyODIgMTEuODI2OEM0LjY1MTE3IDExLjY1MTkgNC41Mjg3OSAxMS41MDg2IDQuMzY2MzUgMTEuNDQ3OUw0LjI4MjAzIDExLjQyNDdMNC4xOTI0NSAxMS40MTY3Wk04Ljg4MzI5IDExLjQxNjdINy4wNjU1OUw2Ljk3NiAxMS40MjQ3QzYuODAxNjIgMTEuNDU2NSA2LjY1ODg1IDExLjU3OTIgNi41OTgzNyAxMS43NDIyTDYuNTc1MjIgMTEuODI2OEw2LjU2NzE5IDExLjkxNjdWMTMuNjY2N0w2LjU3NTIyIDEzLjc1NjVDNi42MDY4NyAxMy45MzE1IDYuNzI5MjUgMTQuMDc0NyA2Ljg5MTY4IDE0LjEzNTRMNi45NzYgMTQuMTU4Nkw3LjA2NTU5IDE0LjE2NjdIOC44ODMyOUw4Ljk3Mjg4IDE0LjE1ODZDOS4xNDcyNiAxNC4xMjY5IDkuMjkwMDMgMTQuMDA0MSA5LjM1MDUxIDEzLjg0MTFMOS4zNzM2NyAxMy43NTY1TDkuMzgxNyAxMy42NjY3VjExLjkxNjdMOS4zNzM2NyAxMS44MjY4QzkuMzQyMDIgMTEuNjUxOSA5LjIxOTY0IDExLjUwODYgOS4wNTcyIDExLjQ0NzlMOC45NzI4OCAxMS40MjQ3TDguODgzMjkgMTEuNDE2N1pNNC4xOTI0NSA2LjgzMzMzSDIuMzc0NzRMMi4yODUxNSA2Ljg0MTM5QzIuMTEwNzggNi44NzMxNCAxLjk2ODAxIDYuOTk1OTEgMS45MDc1MiA3LjE1ODg3TDEuODg0MzcgNy4yNDM0NkwxLjg3NjM0IDcuMzMzMzNWOS4wODMzM0wxLjg4NDM3IDkuMTczMjFDMS45MTYwMiA5LjM0ODE1IDIuMDM4NCA5LjQ5MTM3IDIuMjAwODMgOS41NTIwNUwyLjI4NTE1IDkuNTc1MjhMMi4zNzQ3NCA5LjU4MzMzSDQuMTkyNDVMNC4yODIwMyA5LjU3NTI4QzQuNDU2NDEgOS41NDM1MyA0LjU5OTE4IDkuNDIwNzUgNC42NTk2NyA5LjI1NzhMNC42ODI4MiA5LjE3MzIxTDQuNjkwODUgOS4wODMzM1Y3LjMzMzMzTDQuNjgyODIgNy4yNDM0NkM0LjY1MTE3IDcuMDY4NTIgNC41Mjg3OSA2LjkyNTI5IDQuMzY2MzUgNi44NjQ2MUw0LjI4MjAzIDYuODQxMzlMNC4xOTI0NSA2LjgzMzMzWk04Ljg4MzI5IDYuODMzMzNINy4wNjU1OUw2Ljk3NiA2Ljg0MTM5QzYuODAxNjIgNi44NzMxNCA2LjY1ODg1IDYuOTk1OTEgNi41OTgzNyA3LjE1ODg3TDYuNTc1MjIgNy4yNDM0Nkw2LjU2NzE5IDcuMzMzMzNWOS4wODMzM0w2LjU3NTIyIDkuMTczMjFDNi42MDY4NyA5LjM0ODE1IDYuNzI5MjUgOS40OTEzNyA2Ljg5MTY4IDkuNTUyMDVMNi45NzYgOS41NzUyOEw3LjA2NTU5IDkuNTgzMzNIOC44ODMyOUw4Ljk3Mjg4IDkuNTc1MjhDOS4xNDcyNiA5LjU0MzUzIDkuMjkwMDMgOS40MjA3NSA5LjM1MDUxIDkuMjU3OEw5LjM3MzY3IDkuMTczMjFMOS4zODE3IDkuMDgzMzNWNy4zMzMzM0w5LjM3MzY3IDcuMjQzNDZDOS4zNDIwMiA3LjA2ODUyIDkuMjE5NjQgNi45MjUyOSA5LjA1NzIgNi44NjQ2MUw4Ljk3Mjg4IDYuODQxMzlMOC44ODMyOSA2LjgzMzMzWk0xMy41NzQxIDYuODMzMzNIMTEuNzU2NEwxMS42NjY4IDYuODQxMzlDMTEuNDkyNSA2Ljg3MzE0IDExLjM0OTcgNi45OTU5MSAxMS4yODkyIDcuMTU4ODdMMTEuMjY2MSA3LjI0MzQ2TDExLjI1OCA3LjMzMzMzVjkuMDgzMzNMMTEuMjY2MSA5LjE3MzIxQzExLjI5NzcgOS4zNDgxNSAxMS40MjAxIDkuNDkxMzcgMTEuNTgyNSA5LjU1MjA1TDExLjY2NjggOS41NzUyOEwxMS43NTY0IDkuNTgzMzNIMTMuNTc0MUwxMy42NjM3IDkuNTc1MjhDMTMuODM4MSA5LjU0MzUzIDEzLjk4MDkgOS40MjA3NSAxNC4wNDE0IDkuMjU3OEwxNC4wNjQ1IDkuMTczMjFMMTQuMDcyNSA5LjA4MzMzVjcuMzMzMzNMMTQuMDY0NSA3LjI0MzQ2QzE0LjAzMjkgNy4wNjg1MiAxMy45MTA1IDYuOTI1MjkgMTMuNzQ4IDYuODY0NjFMMTMuNjYzNyA2Ljg0MTM5TDEzLjU3NDEgNi44MzMzM1oiIGZpbGw9IiM0MjQ3NTYiLz4KPHBhdGggZD0iTTEzLjA1NDIgMS4xMjVIMTUuMDQ3OEMxNS41OTgzIDEuMTI1IDE2LjA0NDYgMS42MDA3IDE2LjA0NDYgMi4xODc1VjRIMC4wOTU3MDMxVjIuMTg3NUMwLjA5NTcwMzEgMS42MDA3IDAuNTQxOTg4IDEuMTI1IDEuMDkyNTEgMS4xMjVIMy4wODYxMlYxLjA2MjVDMy4wODYxMiAwLjQ3NTY5NyAzLjUzMjQgMCA0LjA4MjkyIDBDNC42MzM0NCAwIDUuMDc5NzMgMC40NzU2OTcgNS4wNzk3MyAxLjA2MjVWMS4xMjVIMTEuMDYwNlYxLjA2MjVDMTEuMDYwNiAwLjQ3NTY5NyAxMS41MDY4IDAgMTIuMDU3NCAwQzEyLjYwNzkgMCAxMy4wNTQyIDAuNDc1Njk3IDEzLjA1NDIgMS4wNjI1VjEuMTI1WiIgZmlsbD0iIzQyNDc1NiIvPgo8L3N2Zz4K);\n  }\n  .form-star-rating-star.Stars {\n    background-image: url(data:image/png;base64,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) !important;\n  }\n  .signature-pad-passive, .signature-placeholder:after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk4IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTk4IDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNzQuMTA0NCA2LjM0NTA4SDc1LjU4NTlDNzUuNTQxMiA0LjcxNDQgNzQuMDk5NCAzLjUzMTE2IDcyLjAzMTIgMy41MzExNkM2OS45ODc5IDMuNTMxMTYgNjguNDIxOSA0LjY5OTQ4IDY4LjQyMTkgNi40NTQ0NkM2OC40MjE5IDcuODcxMzYgNjkuNDM2MSA4LjcwMTYyIDcxLjA3MTcgOS4xNDQwOUw3Mi4yNzQ5IDkuNDcyMjFDNzMuMzYzNiA5Ljc2MDU2IDc0LjIwMzggMTAuMTE4NSA3NC4yMDM4IDExLjAyMzNDNzQuMjAzOCAxMi4wMTc3IDczLjI1NDMgMTIuNjczOSA3MS45NDY3IDEyLjY3MzlDNzAuNzYzNSAxMi42NzM5IDY5Ljc3OTEgMTIuMTQ2OSA2OS42ODk2IDExLjAzODNINjguMTQ4NEM2OC4yNDc5IDEyLjg4MjcgNjkuNjc0NyAxNC4wMjEyIDcxLjk1NjcgMTQuMDIxMkM3NC4zNDggMTQuMDIxMiA3NS43MjUxIDEyLjc2MzQgNzUuNzI1MSAxMS4wMzgzQzc1LjcyNTEgOS4yMDM3NSA3NC4wODk1IDguNDkyODEgNzIuNzk2OSA4LjE3NDYzTDcxLjgwMjYgNy45MTYxQzcxLjAwNzEgNy43MTIyNyA2OS45NDgyIDcuMzM5NCA2OS45NTMxIDYuMzY0OTdDNjkuOTUzMSA1LjQ5OTkxIDcwLjc0MzYgNC44NTg1OCA3MS45OTY0IDQuODU4NThDNzMuMTY0OCA0Ljg1ODU4IDczLjk5NSA1LjQwNTQ1IDc0LjEwNDQgNi4zNDUwOFoiIGZpbGw9IiM0MjQ3NTYiLz4KPHBhdGggZD0iTTc3LjQ0MTYgMTMuODUyMkg3OC45MjgxVjYuMjE1ODJINzcuNDQxNlYxMy44NTIyWk03OC4xOTIzIDUuMDM3NTVDNzguNzA0NCA1LjAzNzU1IDc5LjEzMTkgNC42Mzk4MyA3OS4xMzE5IDQuMTUyNjFDNzkuMTMxOSAzLjY2NTM5IDc4LjcwNDQgMy4yNjI3IDc4LjE5MjMgMy4yNjI3Qzc3LjY3NTIgMy4yNjI3IDc3LjI1MjcgMy42NjUzOSA3Ny4yNTI3IDQuMTUyNjFDNzcuMjUyNyA0LjYzOTgzIDc3LjY3NTIgNS4wMzc1NSA3OC4xOTIzIDUuMDM3NTVaIiBmaWxsPSIjNDI0NzU2Ii8+CjxwYXRoIGQ9Ik04NC4xMjk2IDE2Ljg2Qzg2LjA3MzUgMTYuODYgODcuNTc0OSAxNS45NzAxIDg3LjU3NDkgMTQuMDIxMlY2LjIxNTgySDg2LjExODNWNy40NTM3NUg4Ni4wMDg5Qzg1Ljc0NTQgNi45ODE0NSA4NS4yMTg0IDYuMTE2MzkgODMuNzk2NSA2LjExNjM5QzgxLjk1MjEgNi4xMTYzOSA4MC41OTQ4IDcuNTczMDYgODAuNTk0OCAxMC4wMDQyQzgwLjU5NDggMTIuNDQwMyA4MS45ODE5IDEzLjczNzggODMuNzg2NiAxMy43Mzc4Qzg1LjE4ODYgMTMuNzM3OCA4NS43MzA1IDEyLjk0NzQgODUuOTk4OSAxMi40NjAxSDg2LjA5MzRWMTMuOTYxNkM4Ni4wOTM0IDE1LjEzOTggODUuMjczMSAxNS42NjE4IDg0LjE0NDUgMTUuNjYxOEM4Mi45MDY2IDE1LjY2MTggODIuNDI0NCAxNS4wNDA0IDgyLjE2MDkgMTQuNjE3OEw4MC44ODMyIDE1LjE0NDhDODEuMjg1OSAxNi4wNjQ1IDgyLjMwNSAxNi44NiA4NC4xMjk2IDE2Ljg2Wk04NC4xMTQ3IDEyLjUwNDlDODIuNzg3MyAxMi41MDQ5IDgyLjA5NjIgMTEuNDg1NyA4Mi4wOTYyIDkuOTg0MjlDODIuMDk2MiA4LjUxNzY3IDgyLjc3MjQgNy4zNzkxNyA4NC4xMTQ3IDcuMzc5MTdDODUuNDEyMyA3LjM3OTE3IDg2LjEwODMgOC40MzgxMiA4Ni4xMDgzIDkuOTg0MjlDODYuMTA4MyAxMS41NjAzIDg1LjM5NzQgMTIuNTA0OSA4NC4xMTQ3IDEyLjUwNDlaIiBmaWxsPSIjNDI0NzU2Ii8+CjxwYXRoIGQ9Ik05MS4wNTUgOS4zMTgwOUM5MS4wNTUgOC4xMDAwNSA5MS44MDA4IDcuNDA0MDMgOTIuODM0OSA3LjQwNDAzQzkzLjg0NDEgNy40MDQwMyA5NC40NTU2IDguMDY1MjUgOTQuNDU1NiA5LjE3MzkyVjEzLjg1MjJIOTUuOTQyMVY4Ljk5NDk0Qzk1Ljk0MjEgNy4xMDU3NCA5NC45MDMxIDYuMTE2MzkgOTMuMzQyIDYuMTE2MzlDOTIuMTkzNSA2LjExNjM5IDkxLjQ0MjggNi42NDgzNSA5MS4wODk4IDcuNDU4NzJIOTAuOTk1NFY2LjIxNTgySDg5LjU2ODVWMTMuODUyMkg5MS4wNTVWOS4zMTgwOVoiIGZpbGw9IiM0MjQ3NTYiLz4KPHBhdGggZD0iTTEwMS43NiAxMy44NTIySDEwMy4yOTZWOS40MTI1NUgxMDguMzcyVjEzLjg1MjJIMTA5LjkxNFYzLjY3MDM3SDEwOC4zNzJWOC4wOTUwOEgxMDMuMjk2VjMuNjcwMzdIMTAxLjc2VjEzLjg1MjJaIiBmaWxsPSIjNDI0NzU2Ii8+CjxwYXRoIGQ9Ik0xMTUuMzIzIDE0LjAwNjNDMTE2Ljk4OCAxNC4wMDYzIDExOC4xNjYgMTMuMTg2IDExOC41MDQgMTEuOTQzMUwxMTcuMDk3IDExLjY4OTVDMTE2LjgyOSAxMi40MTA0IDExNi4xODMgMTIuNzc4MyAxMTUuMzM4IDEyLjc3ODNDMTE0LjA2NSAxMi43NzgzIDExMy4yMSAxMS45NTMgMTEzLjE3IDEwLjQ4MTRIMTE4LjU5OVY5Ljk1NDQ2QzExOC41OTkgNy4xOTUyMiAxMTYuOTQ4IDYuMTE2MzkgMTE1LjIxOCA2LjExNjM5QzExMy4wOSA2LjExNjM5IDExMS42ODggNy43MzcxMyAxMTEuNjg4IDEwLjA4MzdDMTExLjY4OCAxMi40NTUyIDExMy4wNyAxNC4wMDYzIDExNS4zMjMgMTQuMDA2M1pNMTEzLjE3NSA5LjM2NzgxQzExMy4yMzUgOC4yODQgMTE0LjAyIDcuMzQ0MzcgMTE1LjIyOCA3LjM0NDM3QzExNi4zODIgNy4zNDQzNyAxMTcuMTM3IDguMTk5NDkgMTE3LjE0MiA5LjM2NzgxSDExMy4xNzVaIiBmaWxsPSIjNDI0NzU2Ii8+CjxwYXRoIGQ9Ik0xMjAuMjQ4IDEzLjg1MjJIMTIxLjczNVY5LjE4ODgzQzEyMS43MzUgOC4xODk1NCAxMjIuNTA1IDcuNDY4NjYgMTIzLjU1OSA3LjQ2ODY2QzEyMy44NjggNy40Njg2NiAxMjQuMjE2IDcuNTIzMzUgMTI0LjMzNSA3LjU1ODE1VjYuMTM2MjdDMTI0LjE4NiA2LjExNjM5IDEyMy44OTIgNi4xMDE0NyAxMjMuNzAzIDYuMTAxNDdDMTIyLjgwOSA2LjEwMTQ3IDEyMi4wNDMgNi42MDg1OCAxMjEuNzY1IDcuNDI4ODlIMTIxLjY4NVY2LjIxNTgySDEyMC4yNDhWMTMuODUyMloiIGZpbGw9IiM0MjQ3NTYiLz4KPHBhdGggZD0iTTEyOC42MzkgMTQuMDA2M0MxMzAuMzA1IDE0LjAwNjMgMTMxLjQ4MyAxMy4xODYgMTMxLjgyMSAxMS45NDMxTDEzMC40MTQgMTEuNjg5NUMxMzAuMTQ1IDEyLjQxMDQgMTI5LjQ5OSAxMi43NzgzIDEyOC42NTQgMTIuNzc4M0MxMjcuMzgxIDEyLjc3ODMgMTI2LjUyNiAxMS45NTMgMTI2LjQ4NiAxMC40ODE0SDEzMS45MTVWOS45NTQ0NkMxMzEuOTE1IDcuMTk1MjIgMTMwLjI2NSA2LjExNjM5IDEyOC41MzUgNi4xMTYzOUMxMjYuNDA3IDYuMTE2MzkgMTI1LjAwNSA3LjczNzEzIDEyNS4wMDUgMTAuMDgzN0MxMjUuMDA1IDEyLjQ1NTIgMTI2LjM4NyAxNC4wMDYzIDEyOC42MzkgMTQuMDA2M1pNMTI2LjQ5MSA5LjM2NzgxQzEyNi41NTEgOC4yODQgMTI3LjMzNiA3LjM0NDM3IDEyOC41NDUgNy4zNDQzN0MxMjkuNjk4IDcuMzQ0MzcgMTMwLjQ1NCA4LjE5OTQ5IDEzMC40NTkgOS4zNjc4MUgxMjYuNDkxWiIgZmlsbD0iIzQyNDc1NiIvPgo8cGF0aCBkPSJNMSAzNi4wMjI5QzEyLjI0NjEgMzkuMjIwNSAyMy4xODIgMzUuMDMyOCAzMi41MDg0IDI4Ljg1MTFDMzcuNDQwNCAyNS41ODIyIDQyLjMzNDEgMjEuNjY4NyA0NS4zMzI5IDE2LjUxMDFDNDYuNTI4MyAxNC40NTM5IDQ3Ljk4OTMgMTAuODg0NCA0NC4yMjcxIDEwLjg1MjhDNDAuMTMzNyAxMC44MTgzIDM3LjA4NjQgMTQuNTE0MiAzNS41NTg4IDE3Ljg3NDRDMzMuMzY4MSAyMi42OTMzIDMzLjI5MSAyOC40MDA0IDM1Ljk2NTYgMzMuMDQ0MUMzOC40OTcxIDM3LjQzOTYgNDIuNzQ0NSAzOS41MTg0IDQ3LjgxMTQgMzguNjYzOUM1My4xMDM3IDM3Ljc3MTMgNTcuNzMwNCAzNC4xNTYyIDYxLjU3NjUgMzAuNjc4NUM2Mi45OTMgMjkuMzk3NiA2NC4zMjA5IDI4LjA0NzUgNjUuNTQyIDI2LjU4NTdDNjUuNjg0MiAyNi40MTU1IDY2LjE4NDIgMjUuNTc5OCA2Ni41MDggMjUuNTIxOEM2Ni42Mjg0IDI1LjUwMDIgNjYuODA2NCAyOS4xNjQ1IDY2LjgzODUgMjkuMzY0M0M2Ny4xMjU1IDMxLjE1NDMgNjguMDI5NCAzMy4xNzA2IDcwLjE0MzEgMzMuMjMxOEM3Mi44MzMyIDMzLjMwOTcgNzUuMDgyNiAzMS4wNTkxIDc2Ljg5MjIgMjkuNDAxOEM3Ny41MDI2IDI4Ljg0MjggNzkuNDQyNSAyNi4xNjAxIDgwLjQ3NjQgMjYuMTYwMUM4MC45MDE0IDI2LjE2MDEgODEuNzI0OSAyOC4zMDM4IDgxLjkxMjcgMjguNTg4M0M4NC4zOTcyIDMyLjM1MjMgODguMDQ0NiAzMC45ODk0IDkwLjg3MzMgMjguMzUwNUM5MS4zOTM0IDI3Ljg2NTMgOTQuMTc4MSAyMy45ODM5IDk1LjMwOTEgMjQuNjgzMkM5Ni4yMjAzIDI1LjI0NjYgOTYuNjIxNyAyNi41NzY1IDk3LjA4ODYgMjcuNDYxOEM5Ny44NDg0IDI4LjkwMjkgOTguODEwNyAyOS45Mjk0IDEwMC40MTkgMzAuNDY1N0MxMDMuOTEyIDMxLjYzMSAxMDcuNjggMjguMzYzIDExMS4yMjIgMjguMzYzQzExMi4yNTUgMjguMzYzIDExMi43ODMgMjguOTMxNiAxMTMuMzMyIDI5LjcxNDhDMTE0LjA4MSAzMC43ODIzIDExNC44NTMgMzEuNTI3NiAxMTYuMjA1IDMxLjgxNzVDMTIwLjM5MyAzMi43MTU1IDEyMy44MjIgMjguNzM5OSAxMjcuODcyIDI5LjA4ODlDMTI5LjA1MyAyOS4xOTA3IDEyOS45MzUgMzAuMzgxNiAxMzAuODIxIDMxLjAxNjRDMTMyLjYwOSAzMi4yOTY5IDEzNC43NTkgMzMuMTgzNiAxMzYuOTQ4IDMzLjQ5NDdDMTQwLjQ1NyAzMy45OTM0IDE0My45NzUgMzMuMzMyNiAxNDcuMzk1IDMyLjU5MzVDMTUzLjMgMzEuMzE3NCAxNTkuMTQ3IDI5Ljc5NTggMTY1LjA2MiAyOC41NjMzIiBzdHJva2U9IiM0MjQ3NTYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE5Ni41MTUgMTUuMDc3OEwxODQuNDkyIDAuNTUxNzk1QzE4NC4yNTcgMC4yNjc4MSAxODMuODM4IDAuMjI4MjYgMTgzLjU1NCAwLjQ2MzMwN0wxODAuNjQ5IDIuODY3ODhDMTgwLjM2NSAzLjEwMjkzIDE4MC4zMjUgMy41MjI0IDE4MC41NiAzLjgwNjM4TDE5Mi41ODMgMTguMzMyNEMxOTIuNyAxOC40NzQxIDE5Mi44NjQgMTguNTU1MSAxOTMuMDM0IDE4LjU3MTJDMTkzLjIwNCAxOC41ODcyIDE5My4zOCAxOC41MzgyIDE5My41MjIgMTguNDIwOUwxOTYuNDI3IDE2LjAxNjRDMTk2LjcxMSAxNS43ODEzIDE5Ni43NSAxNS4zNjE4IDE5Ni41MTUgMTUuMDc3OFoiIGZpbGw9IiM0MjQ3NTYiLz4KPHBhdGggZD0iTTE4MS40MzYgNi45NTcyTDE3MC44NTUgOS44MjU5M0MxNzAuNjIyIDkuODg5MDEgMTcwLjQ0MSAxMC4wNzI5IDE3MC4zODMgMTAuMzA3MUwxNjYuMTU1IDI3LjEwMTdMMTczLjk3NSAyMC42MjkxQzE3My4yNDUgMTkuMjYxMiAxNzMuNTUgMTcuNTE4OSAxNzQuNzkgMTYuNDkyMUMxNzYuMjA2IDE1LjMxOTggMTc4LjMxMiAxNS41MTkxIDE3OS40ODMgMTYuOTM0NkMxODAuNjU1IDE4LjM1MDggMTgwLjQ1NiAyMC40NTYxIDE3OS4wNDEgMjEuNjI3OEMxNzguMzMzIDIyLjIxMzkgMTc3LjQ1MiAyMi40NTc3IDE3Ni42MDMgMjIuMzc3NkMxNzUuOTY0IDIyLjMxNzQgMTc1LjM0MyAyMi4wNzQgMTc0LjgyNSAyMS42NTY4TDE2Ny4wMDUgMjguMTI4NkwxODQuMjk0IDI3LjExMzdDMTg0LjUzNCAyNy4wOTk2IDE4NC43NDkgMjYuOTU3MSAxODQuODU0IDI2Ljc0MDFMMTg5LjY1IDE2Ljg4MTRMMTgxLjQzNiA2Ljk1NzJaIiBmaWxsPSIjNDI0NzU2Ii8+Cjwvc3ZnPgo=);\n  }\n  .form-spinner-button.form-spinner-up:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjUgMTIuNUw3LjUgNy41TDEyLjUgNy41QzEyLjc3NiA3LjUgMTMgNy4yNzYgMTMgN0MxMyA2LjcyNCAxMi43NzYgNi41IDEyLjUgNi41TDcuNSA2LjVMNy41IDEuNUM3LjUgMS4yMjQgNy4yNzYgMSA3IDFDNi43MjQgMSA2LjUgMS4yMjQgNi41IDEuNUw2LjUgNi41TDEuNSA2LjVDMS4yMjQgNi41IDEgNi43MjQgMSA3QzEgNy4yNzYgMS4yMjQgNy41IDEuNSA3LjVMNi41IDcuNUw2LjUgMTIuNUM2LjUgMTIuNzc2IDYuNzI0IDEzIDcgMTNDNy4yNzYgMTMgNy41IDEyLjc3NiA3LjUgMTIuNVoiIGZpbGw9IiM4QTk0QUEiIHN0cm9rZT0iIzhBOTRBQSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPC9zdmc+Cg==);\n  }\n  .form-spinner-button.form-spinner-down:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDE0IDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMi41IDEuNUw3LjUgMS41TDEuNSAxLjVDMS4yMjQgMS41IDEgMS4yNzYgMSAwLjk5OTk5OUMxIDAuNzIzOTk5IDEuMjI0IDAuNDk5OTk5IDEuNSAwLjQ5OTk5OUw2LjUgMC41TDEyLjUgMC41QzEyLjc3NiAwLjUgMTMgMC43MjQgMTMgMUMxMyAxLjI3NiAxMi43NzYgMS41IDEyLjUgMS41WiIgZmlsbD0iIzhBOTRBQSIgc3Ryb2tlPSIjOEE5NEFBIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4K);\n  }\n  .form-collapse-table:after{\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOCAxNEMyOCA2LjI2ODAxIDIxLjczMiAtOS40OTkzNWUtMDcgMTQgLTYuMTE5NTllLTA3QzYuMjY4MDEgLTIuNzM5ODRlLTA3IC05LjQ5OTM1ZS0wNyA2LjI2ODAxIC02LjExOTU5ZS0wNyAxNEMtMi43Mzk4NGUtMDcgMjEuNzMyIDYuMjY4MDEgMjggMTQgMjhDMjEuNzMyIDI4IDI4IDIxLjczMiAyOCAxNFpNOC4wMDI0IDExLjcwMDNDNy45OTI0NCAxMS41ODEzIDguMDEzNjMgMTEuNDYxNyA4LjA2MzU5IDExLjM1NDlDOC4xMTM0NyAxMS4yNDgyIDguMTkwMDUgMTEuMTU4NSA4LjI4NDc5IDExLjA5NTlDOC4zNzk1MiAxMS4wMzMyIDguNDg4NjUgMTEgOC41OTk5OSAxMUwxOS40IDExQzE5LjUxMTMgMTEgMTkuNjIwNSAxMS4wMzMyIDE5LjcxNTIgMTEuMDk1OUMxOS44MDk5IDExLjE1ODUgMTkuODg2NSAxMS4yNDgyIDE5LjkzNjQgMTEuMzU0OUMxOS45Nzc5IDExLjQ0NDQgMTkuOTk5NiAxMS41NDI5IDIwIDExLjY0MjlDMjAgMTEuNzgyIDE5Ljk1NzkgMTEuOTE3MyAxOS44OCAxMi4wMjg2TDE0LjQ4IDE5Ljc0MjlDMTQuNDI0MSAxOS44MjI3IDE0LjM1MTYgMTkuODg3NSAxNC4yNjgzIDE5LjkzMjFDMTQuMTg1IDE5Ljk3NjggMTQuMDkzMSAyMCAxNCAyMEMxMy45MDY4IDIwIDEzLjgxNSAxOS45NzY4IDEzLjczMTcgMTkuOTMyMUMxMy42NDg0IDE5Ljg4NzUgMTMuNTc1OSAxOS44MjI3IDEzLjUyIDE5Ljc0MjlMOC4xMTk5OSAxMi4wMjg2QzguMDUzMDggMTEuOTMzIDguMDEyMzYgMTEuODE5MyA4LjAwMjQgMTEuNzAwM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=);\n  }\n  li[data-type=control_fileupload] .qq-upload-button:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzOSAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjM3NSAxMi4xODc1QzMxLjUgNS42ODc1IDI2IDAuODc1IDE5LjM3NSAwLjg3NUMxMy42ODc1IDAuODc1IDguNzUgNC40Mzc1IDYuOTM3NSA5LjgxMjVDMi44NzUgMTAuNjg3NSAwIDE0LjE4NzUgMCAxOC4zNzVDMCAyMi45Mzc1IDMuNTYyNSAyNi43NSA4LjEyNSAyNy4xMjVIMzEuODc1SDMxLjkzNzVDMzUuNzUgMjYuNzUgMzguNzUgMjMuNSAzOC43NSAxOS42MjVDMzguNzUgMTUuOTM3NSAzNiAxMi43NSAzMi4zNzUgMTIuMTg3NVpNMjYuMDYyNSAxNS42ODc1QzI1LjkzNzUgMTUuODEyNSAyNS44MTI1IDE1Ljg3NSAyNS42MjUgMTUuODc1QzI1LjQzNzUgMTUuODc1IDI1LjMxMjUgMTUuODEyNSAyNS4xODc1IDE1LjY4NzVMMjAgMTAuNVYyMi43NUMyMCAyMy4xMjUgMTkuNzUgMjMuMzc1IDE5LjM3NSAyMy4zNzVDMTkgMjMuMzc1IDE4Ljc1IDIzLjEyNSAxOC43NSAyMi43NVYxMC41TDEzLjU2MjUgMTUuNjg3NUMxMy4zMTI1IDE1LjkzNzUgMTIuOTM3NSAxNS45Mzc1IDEyLjY4NzUgMTUuNjg3NUMxMi40Mzc1IDE1LjQzNzUgMTIuNDM3NSAxNS4wNjI1IDEyLjY4NzUgMTQuODEyNUwxOC45Mzc1IDguNTYyNUMxOSA4LjUgMTkuMDYyNSA4LjQzNzUgMTkuMTI1IDguNDM3NUMxOS4yNSA4LjM3NSAxOS40Mzc1IDguMzc1IDE5LjYyNSA4LjQzNzVDMTkuNjg3NSA4LjUgMTkuNzUgOC41IDE5LjgxMjUgOC41NjI1TDI2LjA2MjUgMTQuODEyNUMyNi4zMTI1IDE1LjA2MjUgMjYuMzEyNSAxNS40Mzc1IDI2LjA2MjUgMTUuNjg3NVoiIGZpbGw9IiM0MjQ3NTYiLz4KPC9zdmc+Cg==);\n  }\n  .appointmentDayPickerButton {\n    \n  }\n\n  /* NEW THEME STYLE */\n  /*PREFERENCES STYLE*//*PREFERENCES STYLE*/\n    .form-all {\n      font-family: Inter, sans-serif;\n    }\n    .form-all .qq-upload-button,\n    .form-all .form-submit-button,\n    .form-all .form-submit-reset,\n    .form-all .form-submit-print {\n      font-family: Inter, sans-serif;\n    }\n    .form-all .form-pagebreak-back-container,\n    .form-all .form-pagebreak-next-container {\n      font-family: Inter, sans-serif;\n    }\n    .form-header-group {\n      font-family: Inter, sans-serif;\n    }\n    .form-label {\n      font-family: Inter, sans-serif;\n    }\n  \n    .form-label.form-label-auto {\n      \n    display: block;\n    float: none;\n    text-align: left;\n    width: 100%;\n  \n    }\n  \n    .form-line {\n      margin-top: 12px;\n      margin-bottom: 12px;\n    }\n  \n    .form-all {\n      max-width: 752px;\n      width: 100%;\n    }\n  \n    .form-label.form-label-left,\n    .form-label.form-label-right,\n    .form-label.form-label-left.form-label-auto,\n    .form-label.form-label-right.form-label-auto {\n      width: 230px;\n    }\n  \n    .form-all {\n      font-size: 16px\n    }\n    .form-all .qq-upload-button,\n    .form-all .qq-upload-button,\n    .form-all .form-submit-button,\n    .form-all .form-submit-reset,\n    .form-all .form-submit-print {\n      font-size: 16px\n    }\n    .form-all .form-pagebreak-back-container,\n    .form-all .form-pagebreak-next-container {\n      font-size: 16px\n    }\n  \n    .supernova .form-all, .form-all {\n      background-color: #0f283e;\n    }\n  \n    .form-all {\n      color: #FFFFFF;\n    }\n    .form-header-group .form-header {\n      color: #FFFFFF;\n    }\n    .form-header-group .form-subHeader {\n      color: #FFFFFF;\n    }\n    .form-label-top,\n    .form-label-left,\n    .form-label-right,\n    .form-html,\n    .form-checkbox-item label,\n    .form-radio-item label {\n      color: #FFFFFF;\n    }\n    .form-sub-label {\n      color: #ffffff;\n    }\n  \n    .supernova {\n      background-color: #11111B;\n    }\n    .supernova body {\n      background: transparent;\n    }\n  \n    .form-textbox,\n    .form-textarea,\n    .form-dropdown,\n    .form-radio-other-input,\n    .form-checkbox-other-input,\n    .form-captcha input,\n    .form-spinner input {\n      background-color: #ffffff;\n    }\n  \n    .supernova {\n      background-image: none;\n    }\n    #stage {\n      background-image: none;\n    }\n  \n    .form-all {\n      background-image: none;\n    }\n  \n  .ie-8 .form-all:before { display: none; }\n  .ie-8 {\n    margin-top: auto;\n    margin-top: initial;\n  }\n  \n  /*PREFERENCES STYLE*//*__INSPECT_SEPERATOR__*/\n    /* Injected CSS Code */\n',
        }}
      />
      <div className="form-container p-0 m-0 container-fluid">
        <div>
          <form
            className="jotform-form"
            action="https://submit.jotform.com/submit/221919276092057/"
            method="post"
            name="form_221919276092057"
            id={221919276092057}
            acceptCharset="utf-8"
            autoComplete="on"
          >
            <input type="hidden" name="formID" defaultValue={221919276092057} />
            <input type="hidden" id="JWTContainer" defaultValue />
            <input type="hidden" id="cardinalOrderNumber" defaultValue />
            <div role="main" className="form-all">
              <style
                dangerouslySetInnerHTML={{
                  __html: '\n      .form-all:before { background: none;}\n    ',
                }}
              />
              <ul className="form-section page-section">
                <li
                  id="cid_1"
                  className="form-input-wide"
                  data-type="control_head"
                >
                  <div className="form-header-group  header-large px-md3 py-md-0 m-md-0">
                    <div className="header-text httal htvam p-0 mt-3">
                      <h1
                        id="header_1"
                        className="form-header text-center"
                        data-component="header"
                      >
                        Recruitment Form
                      </h1>
                    </div>
                  </div>
                </li>
                <li
                  className="form-line jf-required"
                  data-type="control_fullname"
                  id="id_3"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_3"
                    htmlFor="first_3"
                  >
                    Name
                    <span className="form-required">*</span>
                  </label>
                  <div
                    id="cid_3"
                    className="form-input-wide jf-required"
                    data-layout="full"
                  >
                    <div data-wrapper-react="true">
                      <span
                        className="form-sub-label-container"
                        style={{ verticalAlign: 'top' }}
                        data-input-type="first"
                      >
                        <input
                          type="text"
                          id="first_3"
                          name="q3_name[first]"
                          className="form-textbox validate[required]"
                          data-defaultvalue
                          autoComplete="section-input_3 given-name"
                          size={10}
                          // defaultValue
                          data-component="first"
                          aria-labelledby="label_3 sublabel_3_first"
                          required
                        />
                        <label
                          className="form-sub-label"
                          htmlFor="first_3"
                          id="sublabel_3_first"
                          style={{ minHeight: 13 }}
                          aria-hidden="false"
                        >
                          {' '}
                          First Name{' '}
                        </label>
                      </span>
                      <span
                        className="form-sub-label-container"
                        style={{ verticalAlign: 'top' }}
                        data-input-type="last"
                      >
                        <input
                          type="text"
                          id="last_3"
                          name="q3_name[last]"
                          className="form-textbox validate[required]"
                          data-defaultvalue
                          autoComplete="section-input_3 family-name"
                          size={15}
                          // defaultValue
                          data-component="last"
                          aria-labelledby="label_3 sublabel_3_last"
                          required
                        />
                        <label
                          className="form-sub-label"
                          htmlFor="last_3"
                          id="sublabel_3_last"
                          style={{ minHeight: 13 }}
                          aria-hidden="false"
                        >
                          {' '}
                          Last Name{' '}
                        </label>
                      </span>
                    </div>
                  </div>
                </li>
                <li
                  className="form-line jf-required"
                  data-type="control_email"
                  id="id_4"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_4"
                    htmlFor="input_4"
                  >
                    Email
                    <span className="form-required">*</span>
                  </label>
                  <div
                    id="cid_4"
                    className="form-input-wide jf-required"
                    data-layout="half"
                  >
                    <span
                      className="form-sub-label-container"
                      style={{ verticalAlign: 'top' }}
                    >
                      <input
                        type="email"
                        id="input_4"
                        name="q4_email"
                        className="form-textbox validate[required, Email]"
                        data-defaultvalue
                        style={{ width: 310 }}
                        size={310}
                        // defaultValue
                        placeholder="Enter your email"
                        data-component="email"
                        aria-labelledby="label_4 sublabel_input_4"
                        required
                      />
                      <br />
                      <label
                        className="form-sub-label"
                        style={{
                          border: 0,
                          clip: 'rect(0 0 0 0)',
                          height: 1,
                          margin: '-1px',
                          overflow: 'hidden',
                          padding: 0,
                          position: 'absolute',
                          width: 1,
                          whiteSpace: 'nowrap',
                        }}
                        htmlFor="input_4_confirm"
                      >
                        {' '}
                        Confirmation Email{' '}
                      </label>
                      <input
                        type="email"
                        id="input_4_confirm"
                        name="q4_email"
                        className="form-textbox validate[required, Email, Email_Confirm]"
                        data-defaultvalue
                        style={{ marginTop: 8, width: 310 }}
                        size={310}
                        // defaultValue
                        placeholder="Confirm your email"
                        data-component="emailConfirmation"
                      />
                      <label
                        className="form-sub-label"
                        htmlFor="input_4"
                        id="sublabel_input_4"
                        style={{ minHeight: 13 }}
                        aria-hidden="false"
                      >
                        {' '}
                        example@example.com{' '}
                      </label>
                    </span>
                  </div>
                </li>
                <li
                  className="form-line jf-required"
                  data-type="control_phone"
                  id="id_5"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_5"
                    htmlFor="input_5_full"
                  >
                    Phone Number
                    <span className="form-required">*</span>
                  </label>
                  <div
                    id="cid_5"
                    className="form-input-wide jf-required"
                    data-layout="half"
                  >
                    <span
                      className="form-sub-label-container"
                      style={{ verticalAlign: 'top' }}
                    >
                      <input
                        type="tel"
                        id="input_5_full"
                        name="q5_phoneNumber[full]"
                        data-type="mask-number"
                        className="mask-phone-number form-textbox validate[required, Fill Mask]"
                        data-defaultvalue
                        autoComplete="section-input_5 tel-national"
                        style={{ width: 310 }}
                        data-masked="true"
                        // defaultValue
                        placeholder="00000-00000"
                        data-component="phone"
                        aria-labelledby="label_5 sublabel_5_masked"
                        required
                      />
                      <label
                        className="form-sub-label"
                        htmlFor="input_5_full"
                        id="sublabel_5_masked"
                        style={{ minHeight: 13 }}
                        aria-hidden="false"
                      >
                        {' '}
                        Please enter a valid phone number.{' '}
                      </label>
                    </span>
                  </div>
                </li>
                <li
                  className="form-line jf-required"
                  data-type="control_textbox"
                  id="id_10"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_10"
                    htmlFor="input_10"
                  >
                    Github Profile
                    <span className="form-required">*</span>
                  </label>
                  <div
                    id="cid_10"
                    className="form-input-wide jf-required"
                    data-layout="half"
                  >
                    <span
                      className="form-sub-label-container"
                      style={{ verticalAlign: 'top' }}
                    >
                      <input
                        type="text"
                        id="input_10"
                        name="q10_githubProfile"
                        data-type="input-textbox"
                        className="form-textbox validate[required, Url]"
                        data-defaultvalue
                        style={{ width: 310 }}
                        size={310}
                        // defaultValue
                        data-component="textbox"
                        aria-labelledby="label_10 sublabel_input_10"
                        required
                      />
                      <label
                        className="form-sub-label"
                        htmlFor="input_10"
                        id="sublabel_input_10"
                        style={{ minHeight: 13 }}
                        aria-hidden="false"
                      >
                        {' '}
                        Provide the link to your Github profile here{' '}
                      </label>
                    </span>
                  </div>
                </li>
                <li
                  className="form-line jf-required"
                  data-type="control_textbox"
                  id="id_11"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_11"
                    htmlFor="input_11"
                  >
                    Linkedin Profile
                    <span className="form-required">*</span>
                  </label>
                  <div
                    id="cid_11"
                    className="form-input-wide jf-required"
                    data-layout="half"
                  >
                    <span
                      className="form-sub-label-container"
                      style={{ verticalAlign: 'top' }}
                    >
                      <input
                        type="text"
                        id="input_11"
                        name="q11_linkedinProfile"
                        data-type="input-textbox"
                        className="form-textbox validate[required, Url]"
                        data-defaultvalue
                        style={{ width: 310 }}
                        size={310}
                        // defaultValue
                        data-component="textbox"
                        aria-labelledby="label_11 sublabel_input_11"
                        required
                      />
                      <label
                        className="form-sub-label"
                        htmlFor="input_11"
                        id="sublabel_input_11"
                        style={{ minHeight: 13 }}
                        aria-hidden="false"
                      >
                        {' '}
                        Provide the link to your Linkedin profile here{' '}
                      </label>
                    </span>
                  </div>
                </li>
                <li
                  className="form-line"
                  data-type="control_textarea"
                  id="id_12"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_12"
                    htmlFor="input_12"
                  >
                    {' '}
                    Anything else you want to share (Portfolio, Codechef account
                    etc.){' '}
                  </label>
                  <div
                    id="cid_12"
                    className="form-input-wide"
                    data-layout="full"
                  >
                    <textarea
                      id="input_12"
                      className="form-textarea"
                      name="q12_anythingElse"
                      style={{ width: 648, height: 163 }}
                      data-component="textarea"
                      aria-labelledby="label_12"
                      defaultValue={''}
                    />
                  </div>
                </li>
                <li
                  className="form-line"
                  data-type="control_checkbox"
                  id="id_15"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_15"
                    htmlFor="input_15"
                  >
                    {' '}
                    Choose the Tech department which you would like to work in{' '}
                  </label>
                  <div
                    id="cid_15"
                    className="form-input-wide"
                    data-layout="full"
                  >
                    <div
                      className="form-single-column"
                      role="group"
                      aria-labelledby="label_15"
                      data-component="checkbox"
                    >
                      <span
                        className="form-checkbox-item"
                        style={{ clear: 'left' }}
                      >
                        <span className="dragger-item" />
                        <input
                          type="checkbox"
                          aria-describedby="label_15"
                          className="form-checkbox"
                          id="input_15_0"
                          name="q15_t[]"
                          defaultValue="Web Dev"
                        />
                        <label id="label_input_15_0" htmlFor="input_15_0">
                          {' '}
                          Web Dev{' '}
                        </label>
                      </span>
                      <span
                        className="form-checkbox-item"
                        style={{ clear: 'left' }}
                      >
                        <span className="dragger-item" />
                        <input
                          type="checkbox"
                          aria-describedby="label_15"
                          className="form-checkbox"
                          id="input_15_1"
                          name="q15_t[]"
                          defaultValue="App Dev"
                        />
                        <label id="label_input_15_1" htmlFor="input_15_1">
                          {' '}
                          App Dev{' '}
                        </label>
                      </span>
                      <span
                        className="form-checkbox-item"
                        style={{ clear: 'left' }}
                      >
                        <span className="dragger-item" />
                        <input
                          type="checkbox"
                          aria-describedby="label_15"
                          className="form-checkbox"
                          id="input_15_2"
                          name="q15_t[]"
                          defaultValue="ML/AI/DL"
                        />
                        <label id="label_input_15_2" htmlFor="input_15_2">
                          {' '}
                          ML/AI/DL{' '}
                        </label>
                      </span>
                      <span
                        className="form-checkbox-item"
                        style={{ clear: 'left' }}
                      >
                        <span className="dragger-item" />
                        <input
                          type="checkbox"
                          aria-describedby="label_15"
                          className="form-checkbox"
                          id="input_15_3"
                          name="q15_t[]"
                          defaultValue="Academic (CP)"
                        />
                        <label id="label_input_15_3" htmlFor="input_15_3">
                          {' '}
                          Academic (CP){' '}
                        </label>
                      </span>
                      <span
                        className="form-checkbox-item formCheckboxOther"
                        style={{ clear: 'left' }}
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox-other form-checkbox"
                          name="q15_t[other]"
                          id="other_15"
                          defaultValue="other"
                          tabIndex={0}
                          aria-label="Other"
                        />
                        <label
                          id="label_other_15"
                          style={{ textIndent: 0 }}
                          htmlFor="other_15"
                        >
                          {' '}
                          Other{' '}
                        </label>
                        <span
                          id="other_15_input"
                          className="other-input-container"
                          style={{ display: 'none' }}
                        >
                          <input
                            type="text"
                            className="form-checkbox-other-input form-textbox"
                            name="q15_t[other]"
                            data-otherhint="Other"
                            size={15}
                            id="input_15"
                            data-placeholder="Please type another option here"
                            placeholder="Please type another option here"
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
                <li
                  className="form-line"
                  data-type="control_checkbox"
                  id="id_16"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_16"
                    htmlFor="input_16"
                  >
                    {' '}
                    Choose the Non-Tech department of your choice{' '}
                  </label>
                  <div
                    id="cid_16"
                    className="form-input-wide"
                    data-layout="full"
                  >
                    <div
                      className="form-single-column"
                      role="group"
                      aria-labelledby="label_16"
                      data-component="checkbox"
                    >
                      <span
                        className="form-checkbox-item"
                        style={{ clear: 'left' }}
                      >
                        <span className="dragger-item" />
                        <input
                          type="checkbox"
                          aria-describedby="label_16"
                          className="form-checkbox"
                          id="input_16_0"
                          name="q16_chooseThe[]"
                          defaultValue="Graphic Designing"
                        />
                        <label id="label_input_16_0" htmlFor="input_16_0">
                          {' '}
                          Graphic Designing{' '}
                        </label>
                      </span>
                      <span
                        className="form-checkbox-item"
                        style={{ clear: 'left' }}
                      >
                        <span className="dragger-item" />
                        <input
                          type="checkbox"
                          aria-describedby="label_16"
                          className="form-checkbox"
                          id="input_16_1"
                          name="q16_chooseThe[]"
                          defaultValue="3D Modelling"
                        />
                        <label id="label_input_16_1" htmlFor="input_16_1">
                          {' '}
                          3D Modelling{' '}
                        </label>
                      </span>
                      <span
                        className="form-checkbox-item"
                        style={{ clear: 'left' }}
                      >
                        <span className="dragger-item" />
                        <input
                          type="checkbox"
                          aria-describedby="label_16"
                          className="form-checkbox"
                          id="input_16_2"
                          name="q16_chooseThe[]"
                          defaultValue="Video Editting"
                        />
                        <label id="label_input_16_2" htmlFor="input_16_2">
                          {' '}
                          Video Editting{' '}
                        </label>
                      </span>
                      <span
                        className="form-checkbox-item"
                        style={{ clear: 'left' }}
                      >
                        <span className="dragger-item" />
                        <input
                          type="checkbox"
                          aria-describedby="label_16"
                          className="form-checkbox"
                          id="input_16_3"
                          name="q16_chooseThe[]"
                          defaultValue="Marketing"
                        />
                        <label id="label_input_16_3" htmlFor="input_16_3">
                          {' '}
                          Marketing{' '}
                        </label>
                      </span>
                    </div>
                  </div>
                </li>
                <li
                  className="form-line"
                  data-type="control_textarea"
                  id="id_17"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_17"
                    htmlFor="input_17"
                  >
                    {' '}
                    Enter your skills (Tech and Non Tech){' '}
                  </label>
                  <div
                    id="cid_17"
                    className="form-input-wide"
                    data-layout="full"
                  >
                    <textarea
                      id="input_17"
                      className="form-textarea"
                      name="q17_enterYour"
                      style={{ width: 648, height: 163 }}
                      data-component="textarea"
                      aria-labelledby="label_17"
                      defaultValue={''}
                    />
                  </div>
                </li>
                <li
                  className="form-line"
                  data-type="control_dropdown"
                  id="id_18"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_18"
                    htmlFor="input_18"
                  >
                    {' '}
                    Your mode of Preference{' '}
                  </label>
                  <div
                    id="cid_18"
                    className="form-input-wide"
                    data-layout="half"
                  >
                    <select
                      className="form-dropdown"
                      id="input_18"
                      name="q18_yourMode"
                      style={{ width: 310 }}
                      data-component="dropdown"
                    >
                      <option value> Please Select </option>
                      <option value="Quiz Round"> Quiz Round </option>
                      <option value="Task/Showcase project round">
                        {' '}
                        Task/Showcase project round{' '}
                      </option>
                      <option value="Try both"> Try both </option>
                    </select>
                  </div>
                </li>
                <li
                  className="form-line"
                  data-type="control_textarea"
                  id="id_20"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_20"
                    htmlFor="input_20"
                  >
                    {' '}
                    Which other societies are you a part of (with position){' '}
                  </label>
                  <div
                    id="cid_20"
                    className="form-input-wide"
                    data-layout="full"
                  >
                    <textarea
                      id="input_20"
                      className="form-textarea"
                      name="q20_whichOther"
                      style={{ width: 648, height: 163 }}
                      data-component="textarea"
                      aria-labelledby="label_20"
                      defaultValue={''}
                    />
                  </div>
                </li>
                <li
                  className="form-line"
                  data-type="control_textbox"
                  id="id_22"
                >
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_22"
                    htmlFor="input_22"
                  >
                    {' '}
                    Your CGPA (No need to answer this) XD{' '}
                  </label>
                  <div
                    id="cid_22"
                    className="form-input-wide"
                    data-layout="half"
                  >
                    <input
                      type="text"
                      id="input_22"
                      name="q22_yourCgpa"
                      data-type="input-textbox"
                      className="form-textbox"
                      data-defaultvalue
                      style={{ width: 310 }}
                      size={310}
                      // defaultValue
                      data-component="textbox"
                      aria-labelledby="label_22"
                    />
                  </div>
                </li>
                <li className="form-line" data-type="control_button" id="id_2">
                  <div
                    id="cid_2"
                    className="form-input-wide"
                    data-layout="full"
                  >
                    <div
                      data-align="auto"
                      className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
                    >
                      <button
                        id="input_scl_2"
                        type="button"
                        className="form-submit-button form-sacl-button js-new-sacl-button  jf-form-buttons "
                        data-component="button"
                      >
                        Save
                      </button>
                      <button
                        id="input_2"
                        type="submit"
                        className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                        data-component="button"
                        data-content
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </li>
                <li style={{ display: 'none' }}>
                  Should be Empty:
                  <input type="text" name="website" defaultValue />
                </li>
              </ul>
            </div>
            <input
              type="hidden"
              className="simple_spc"
              id="simple_spc"
              name="simple_spc"
              defaultValue={221919276092057}
            />
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default RecruitmentForm
