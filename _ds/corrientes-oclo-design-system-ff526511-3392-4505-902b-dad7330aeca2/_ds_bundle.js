/* @ds-bundle: {"format":4,"namespace":"CorrientesOCLODesignSystem_ff5265","components":[{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Pastilla","sourcePath":"components/core/Pastilla.jsx"},{"name":"PASTILLA_ESTADOS","sourcePath":"components/core/Pastilla.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Tabs","sourcePath":"components/data/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Card.jsx":"553ea2682666","components/core/Icon.jsx":"fa562ace71bc","components/core/Pastilla.jsx":"17be7e48329e","components/data/Table.jsx":"09ac61c0d481","components/data/Tabs.jsx":"4eaa46c679ea","components/feedback/Dialog.jsx":"40c296a3195c","components/feedback/Toast.jsx":"821be8cdb20b","components/feedback/Tooltip.jsx":"810c3886a0fc","components/forms/Button.jsx":"82ecfb7bb60f","components/forms/Checkbox.jsx":"4cea0b5aee7e","components/forms/IconButton.jsx":"895bea52d6be","components/forms/Input.jsx":"b1626a9b08b8","components/forms/Radio.jsx":"fda32ff2ed8d","components/forms/Select.jsx":"0223259ab006","components/forms/Switch.jsx":"7edbdaed764f","ui_kits/oclo/AgendaScreen.jsx":"8f9590ba97d7","ui_kits/oclo/ExpedienteDetalle.jsx":"1431c72fc3cd","ui_kits/oclo/ExpedientesScreen.jsx":"1e761cb36567","ui_kits/oclo/LoginScreen.jsx":"6d807a4416b7","ui_kits/oclo/Shell.jsx":"a818ad3ed182","ui_kits/oclo/data.js":"155530a6e223"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CorrientesOCLODesignSystem_ff5265 = window.CorrientesOCLODesignSystem_ff5265 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function Card({
  title,
  actions,
  children,
  padding = true,
  style,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `cts-card ${className}`,
    style: style
  }, (title || actions) && /*#__PURE__*/React.createElement("div", {
    className: "cts-card__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cts-card__title"
  }, title), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, actions) : null), padding ? /*#__PURE__*/React.createElement("div", {
    className: "cts-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 24,
  color,
  style,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `cts-icon ${className}`,
    style: {
      fontSize: size,
      color,
      ...style
    }
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Pastilla.jsx
try { (() => {
const ESTADOS = {
  tramite: {
    color: "var(--amarillo-oscuro)",
    iconBg: "var(--ocre)",
    icon: "hourglass_top",
    label: "En trámite"
  },
  audiencia: {
    color: "var(--celeste-oscuro)",
    iconBg: "var(--azul)",
    icon: "event",
    label: "Audiencia fijada"
  },
  acuerdo: {
    color: "var(--verde-claro)",
    iconBg: "var(--verde-oscuro)",
    icon: "handshake",
    label: "Acuerdo"
  },
  sinacuerdo: {
    color: "var(--rojo-claro)",
    iconBg: "var(--bordo)",
    icon: "gavel",
    label: "Sin acuerdo"
  },
  vencido: {
    color: "var(--bordo)",
    iconBg: "var(--negro)",
    icon: "timer_off",
    label: "Vencido"
  },
  archivado: {
    color: "var(--gris-500)",
    iconBg: "var(--gris-700)",
    icon: "inventory_2",
    label: "Archivado"
  }
};
function Pastilla({
  estado,
  icon,
  color,
  iconBg,
  size = "md",
  secondary,
  children,
  style,
  className = ""
}) {
  const p = estado ? ESTADOS[estado] : {};
  const bg = color || p.color || "var(--celeste-oscuro)";
  const ibg = iconBg || p.iconBg || "var(--azul)";
  const glyph = icon || p.icon || "label";
  return /*#__PURE__*/React.createElement("span", {
    className: `cts-pastilla ${size === "sm" ? "cts-pastilla--sm" : ""} ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "cts-pastilla__icon",
    style: {
      background: ibg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    className: ""
  })), /*#__PURE__*/React.createElement("span", {
    className: "cts-pastilla__label",
    style: {
      background: bg
    }
  }, children || p.label), secondary ? /*#__PURE__*/React.createElement("span", {
    className: "cts-pastilla__sec"
  }, secondary) : null);
}
const PASTILLA_ESTADOS = ESTADOS;
Object.assign(__ds_scope, { Pastilla, PASTILLA_ESTADOS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pastilla.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  hover = true,
  onRowClick,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: `cts-table ${hover ? "cts-table--hover" : ""} ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      width: c.width
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id ?? i,
    onClick: onRowClick ? () => onRowClick(r, i) : undefined
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key
  }, c.render ? c.render(r, i) : r[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/data/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `cts-tabs ${className}`,
    style: style,
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    role: "tab",
    "aria-selected": t.id === active,
    className: `cts-tab ${t.id === active ? "cts-tab--active" : ""}`,
    onClick: () => onChange && onChange(t.id)
  }, t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon
  }) : null, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
    className: "cts-tab__count"
  }, t.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const KIND_ICON = {
  exito: "check_circle",
  error: "error",
  advertencia: "warning",
  info: "info"
};
function Toast({
  kind = "info",
  children,
  style,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `cts-toast cts-toast--${kind} ${className}`,
    style: style,
    role: "status"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: KIND_ICON[kind] || "info"
  }), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  style,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `cts-tooltip ${className}`,
    style: style
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "cts-tooltip__tip",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "md",
  icon,
  disabled,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `cts-btn cts-btn--${variant} ${size !== "md" ? `cts-btn--${size}` : ""} ${className}`,
    disabled: disabled
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 15 : size === "lg" ? 20 : 17
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `cts-check ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `cts-btn cts-iconbtn cts-btn--${variant} ${size !== "md" ? `cts-btn--${size}` : ""} ${className}`,
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 16 : size === "lg" ? 22 : 19
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  footer,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "cts-dialog-scrim",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cts-dialog",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cts-dialog__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cts-dialog__title"
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Cerrar",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "cts-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "cts-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  helper,
  error,
  icon,
  style,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `cts-field ${className}`,
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", null, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "cts-inputwrap"
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: `cts-input ${error ? "cts-input--error" : ""}`
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    className: "cts-error"
  }, error) : helper ? /*#__PURE__*/React.createElement("span", {
    className: "cts-help"
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `cts-check ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  helper,
  error,
  options = [],
  placeholder,
  style,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `cts-field ${className}`,
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", null, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    className: `cts-select ${error ? "cts-select--error" : ""}`
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), error ? /*#__PURE__*/React.createElement("span", {
    className: "cts-error"
  }, error) : helper ? /*#__PURE__*/React.createElement("span", {
    className: "cts-help"
  }, helper) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `cts-switch ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oclo/AgendaScreen.jsx
try { (() => {
const {
  Card,
  Pastilla,
  Icon,
  Button
} = window.CorrientesOCLODesignSystem_ff5265;
function AgendaScreen() {
  const dias = ["Lu 10", "Ma 11", "Mi 12", "Ju 13", "Vi 14"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, dias.map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d,
    style: {
      padding: "8px 16px",
      borderRadius: 8,
      border: "1px solid var(--border-default)",
      background: i === 4 ? "var(--azul)" : "#fff",
      color: i === 4 ? "#fff" : "var(--negro)",
      font: "600 13px var(--font-sans)",
      cursor: "pointer"
    }
  }, d))), /*#__PURE__*/React.createElement(Button, {
    icon: "add"
  }, "Fijar audiencia")), /*#__PURE__*/React.createElement(Card, {
    title: "Viernes 14 de agosto — Sala 1, 2 y 3",
    padding: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, window.OCLO_DATA.audiencias.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "14px 18px",
      borderBottom: i < window.OCLO_DATA.audiencias.length - 1 ? "1px solid var(--border-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      font: "700 15px var(--font-sans)",
      color: "var(--negro)"
    }
  }, a.hora), /*#__PURE__*/React.createElement(Icon, {
    name: "meeting_room",
    color: "var(--text-faint)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      font: "400 12.5px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, a.sala), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 14px var(--font-sans)"
    }
  }, a.partes), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, a.exp, " \xB7 ", a.conciliador)), /*#__PURE__*/React.createElement(Pastilla, {
    size: "sm",
    estado: a.estado
  }))))));
}
window.OcloAgendaScreen = AgendaScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oclo/AgendaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oclo/ExpedienteDetalle.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Pastilla,
  Icon,
  Dialog,
  Toast
} = window.CorrientesOCLODesignSystem_ff5265;
function ExpedienteDetalle({
  exp,
  onBack
}) {
  const [tab, setTab] = React.useState("actuaciones");
  const [dlg, setDlg] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "none",
      border: "none",
      cursor: "pointer",
      font: "600 13px var(--font-sans)",
      color: "var(--azul)",
      padding: 0,
      width: "fit-content"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 17
  }), "Volver a expedientes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, exp.nro), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 26px var(--font-display)",
      textTransform: "uppercase",
      lineHeight: 1,
      color: "var(--negro)",
      margin: "4px 0 8px"
    }
  }, exp.caratula), /*#__PURE__*/React.createElement(Pastilla, {
    estado: exp.estado
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "print",
    label: "Imprimir",
    variant: "secondary"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "event"
  }, "Reprogramar audiencia"), /*#__PURE__*/React.createElement(Button, {
    icon: "handshake",
    onClick: () => {
      setDlg(true);
    }
  }, "Registrar acuerdo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11.5px var(--font-sans)",
      color: "var(--text-muted)",
      textTransform: "uppercase"
    }
  }, "Reclamante"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px var(--font-sans)",
      marginTop: 4
    }
  }, exp.reclamante), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, "DNI ", exp.dni)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11.5px var(--font-sans)",
      color: "var(--text-muted)",
      textTransform: "uppercase"
    }
  }, "Reclamada"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px var(--font-sans)",
      marginTop: 4
    }
  }, exp.reclamada), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, "CUIT ", exp.cuit)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11.5px var(--font-sans)",
      color: "var(--text-muted)",
      textTransform: "uppercase"
    }
  }, "Conciliador/a"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px var(--font-sans)",
      marginTop: 4
    }
  }, exp.conciliador), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, "Ingreso ", exp.ingreso)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11.5px var(--font-sans)",
      color: "var(--text-muted)",
      textTransform: "uppercase"
    }
  }, "Pr\xF3xima audiencia"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px var(--font-sans)",
      marginTop: 4
    }
  }, exp.audiencia), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, "Monto reclamado ", exp.monto))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      borderBottom: "1px solid var(--border-default)"
    }
  }, [["actuaciones", "Actuaciones", "history"], ["objeto", "Objeto del reclamo", "description"], ["documentos", "Documentos", "attach_file"]].map(([id, label, icon]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      display: "flex",
      gap: 7,
      alignItems: "center",
      padding: "10px 16px",
      border: "none",
      background: "none",
      cursor: "pointer",
      font: "600 14px var(--font-sans)",
      color: tab === id ? "var(--azul)" : "var(--text-muted)",
      borderBottom: tab === id ? "2.5px solid var(--azul)" : "2.5px solid transparent",
      marginBottom: -1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), label))), tab === "actuaciones" && /*#__PURE__*/React.createElement(Card, {
    padding: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, window.OCLO_DATA.actuaciones.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      padding: "14px 18px",
      borderBottom: i < 3 ? "1px solid var(--border-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: "var(--gris-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 18,
    color: "var(--azul)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, a.fecha), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px var(--font-sans)",
      marginTop: 2
    }
  }, a.texto)))))), tab === "objeto" && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.5 var(--font-sans)"
    }
  }, exp.objeto, ". Monto reclamado: ", exp.monto, ".")), tab === "documentos" && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, "Sin documentos adjuntos.")), /*#__PURE__*/React.createElement(Dialog, {
    open: dlg,
    title: "Registrar acuerdo",
    onClose: () => setDlg(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDlg(false)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setDlg(false);
        setToast("Acuerdo registrado correctamente.");
        setTimeout(() => setToast(null), 3200);
      }
    }, "Confirmar"))
  }, "Se registrar\xE1 el acuerdo alcanzado por las partes en el expediente ", exp.nro, " y se generar\xE1 el acta para su homologaci\xF3n."), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    kind: "exito"
  }, toast)));
}
window.OcloExpedienteDetalle = ExpedienteDetalle;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oclo/ExpedienteDetalle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oclo/ExpedientesScreen.jsx
try { (() => {
const {
  Table,
  Tabs,
  Pastilla,
  Button,
  Input,
  Select,
  Card,
  IconButton
} = window.CorrientesOCLODesignSystem_ff5265;
function ExpedientesScreen({
  onOpen
}) {
  const [tab, setTab] = React.useState("todos");
  const [q, setQ] = React.useState("");
  const data = window.OCLO_DATA.expedientes.filter(e => (tab === "todos" || tab === "mios" && e.conciliador === "Dra. M. Fernández" || tab === "venc" && (e.estado === "vencido" || e.estado === "tramite")) && (q === "" || (e.caratula + e.nro).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Buscar por car\xE1tula, expediente, DNI o CUIT",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      flex: 1,
      maxWidth: 420
    }
  }), /*#__PURE__*/React.createElement(Select, {
    options: ["Todos los estados", "En trámite", "Audiencia fijada", "Acuerdo", "Sin acuerdo", "Vencido", "Archivado"],
    style: {
      width: 190
    }
  }), /*#__PURE__*/React.createElement(Select, {
    options: ["Todos los conciliadores", "Dra. M. Fernández", "Dr. J. Aquino", "Dra. C. Romero"],
    style: {
      width: 210
    }
  })), /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    onChange: setTab,
    tabs: [{
      id: "todos",
      label: "Todos",
      count: window.OCLO_DATA.expedientes.length
    }, {
      id: "mios",
      label: "Mis expedientes",
      count: 3
    }, {
      id: "venc",
      label: "Requieren acción",
      icon: "timer",
      count: 2
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    padding: false
  }, /*#__PURE__*/React.createElement(Table, {
    onRowClick: r => onOpen(r),
    columns: [{
      key: "nro",
      label: "Expediente",
      width: 150,
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r.nro)
    }, {
      key: "caratula",
      label: "Carátula"
    }, {
      key: "conciliador",
      label: "Conciliador/a",
      width: 150
    }, {
      key: "ingreso",
      label: "Ingreso",
      width: 90
    }, {
      key: "estado",
      label: "Estado",
      width: 180,
      render: r => /*#__PURE__*/React.createElement(Pastilla, {
        size: "sm",
        estado: r.estado
      })
    }, {
      key: "acc",
      label: "",
      width: 46,
      render: () => /*#__PURE__*/React.createElement(IconButton, {
        icon: "chevron_right",
        label: "Abrir",
        variant: "ghost",
        size: "sm"
      })
    }],
    rows: data
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12.5px var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, data.length, " expedientes \xB7 actualizado hoy 08:12"));
}
window.OcloExpedientesScreen = ExpedientesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oclo/ExpedientesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oclo/LoginScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Checkbox
} = window.CorrientesOCLODesignSystem_ff5265;
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--gris-100)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "Gobierno de Corrientes",
    style: {
      width: 240
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border-default)",
      borderRadius: 10,
      width: 380,
      padding: "30px 34px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 26px var(--font-display)",
      textTransform: "uppercase",
      lineHeight: 0.98,
      color: "var(--negro)"
    }
  }, "Sistema de gesti\xF3n", /*#__PURE__*/React.createElement("br", null), "OCLO"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px var(--font-sans)",
      color: "var(--text-muted)",
      margin: "8px 0 22px"
    }
  }, "Oficina de Conciliaci\xF3n Laboral Obligatoria", /*#__PURE__*/React.createElement("br", null), "Secretar\xEDa de Trabajo y Empleo"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Usuario",
    icon: "person",
    placeholder: "nombre.apellido",
    defaultValue: "mariana.fernandez"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contrase\xF1a",
    icon: "lock",
    type: "password",
    defaultValue: "••••••••"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Mantener sesi\xF3n iniciada"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    style: {
      width: "100%"
    }
  }, "Ingresar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11.5px var(--font-sans)",
      color: "var(--text-faint)",
      textAlign: "center"
    }
  }, "Gobierno de la Provincia de Corrientes \xB7 Uso interno", /*#__PURE__*/React.createElement("br", null), "Mesa de ayuda: soporte@trabajo.corrientes.gob.ar"));
}
window.OcloLoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oclo/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oclo/Shell.jsx
try { (() => {
const {
  Icon
} = window.CorrientesOCLODesignSystem_ff5265;
function Shell({
  nav,
  onNav,
  children,
  title,
  actions
}) {
  const items = [{
    id: "expedientes",
    icon: "folder",
    label: "Expedientes"
  }, {
    id: "agenda",
    icon: "event",
    label: "Agenda de audiencias"
  }, {
    id: "acuerdos",
    icon: "handshake",
    label: "Acuerdos"
  }, {
    id: "reportes",
    icon: "monitoring",
    label: "Reportes"
  }, {
    id: "config",
    icon: "settings",
    label: "Configuración"
  }];
  const u = window.OCLO_DATA.usuario;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      background: "var(--surface-page)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flex: "none",
      background: "var(--negro)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 18px 14px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal-dark.png",
    alt: "Gobierno de Corrientes",
    style: {
      width: 168,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 18px 16px",
      borderBottom: "1px solid #454443",
      font: "600 11px var(--font-sans)",
      letterSpacing: ".06em",
      color: "var(--gris-400)",
      textTransform: "uppercase",
      lineHeight: 1.5
    }
  }, "OCLO \xB7 Conciliaci\xF3n", /*#__PURE__*/React.createElement("br", null), "Laboral Obligatoria"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "14px 10px",
      flex: 1
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onNav(it.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "9px 12px",
      border: "none",
      borderRadius: 6,
      cursor: "pointer",
      background: nav === it.id ? "var(--gris-700)" : "transparent",
      color: nav === it.id ? "#fff" : "var(--gris-400)",
      font: "600 13.5px var(--font-sans)",
      textAlign: "left",
      transition: "background .12s,color .12s"
    },
    onMouseEnter: e => {
      if (nav !== it.id) e.currentTarget.style.color = "#fff";
    },
    onMouseLeave: e => {
      if (nav !== it.id) e.currentTarget.style.color = "var(--gris-400)";
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 19
  }), it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderTop: "1px solid #454443",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--celeste-oscuro)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "700 13px var(--font-sans)",
      flex: "none"
    }
  }, u.iniciales), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12.5px var(--font-sans)",
      color: "#fff",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, u.nombre), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11px var(--font-sans)",
      color: "var(--gris-400)"
    }
  }, u.rol)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      flex: "none",
      background: "#fff",
      borderBottom: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "0 26px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "800 22px var(--font-display)",
      textTransform: "uppercase",
      color: "var(--negro)",
      letterSpacing: ".01em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, actions)), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 26
    }
  }, children)));
}
window.OcloShell = Shell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oclo/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oclo/data.js
try { (() => {
window.OCLO_DATA = {
  usuario: {
    nombre: "Dra. Mariana Fernández",
    rol: "Conciliadora",
    iniciales: "MF"
  },
  expedientes: [{
    id: 1,
    nro: "EXP-2026-004812",
    caratula: "GÓMEZ, Ramón c/ FRIGORÍFICO NEA S.A. s/ Despido",
    reclamante: "Gómez, Ramón",
    dni: "22.456.789",
    reclamada: "Frigorífico NEA S.A.",
    cuit: "30-65481297-4",
    conciliador: "Dra. M. Fernández",
    estado: "audiencia",
    ingreso: "02/07/2026",
    audiencia: "14/08/2026 · 09:00",
    objeto: "Despido sin causa — art. 245 LCT",
    monto: "$ 4.850.000"
  }, {
    id: 2,
    nro: "EXP-2026-004791",
    caratula: "BENÍTEZ, Lucía c/ TRANSPORTE TARAGÜÍ S.R.L. s/ Diferencias salariales",
    reclamante: "Benítez, Lucía",
    dni: "31.204.556",
    reclamada: "Transporte Taragüí S.R.L.",
    cuit: "30-70912384-6",
    conciliador: "Dr. J. Aquino",
    estado: "tramite",
    ingreso: "28/06/2026",
    audiencia: "—",
    objeto: "Diferencias salariales y horas extra",
    monto: "$ 1.230.000"
  }, {
    id: 3,
    nro: "EXP-2026-004750",
    caratula: "RAMÍREZ, Sofía c/ COMERCIAL DEL LITORAL S.A. s/ Despido indirecto",
    reclamante: "Ramírez, Sofía",
    dni: "28.998.102",
    reclamada: "Comercial del Litoral S.A.",
    cuit: "30-58234771-9",
    conciliador: "Dra. M. Fernández",
    estado: "acuerdo",
    ingreso: "15/06/2026",
    audiencia: "05/08/2026 · 10:30",
    objeto: "Despido indirecto — falta de registración",
    monto: "$ 3.100.000"
  }, {
    id: 4,
    nro: "EXP-2026-004723",
    caratula: "ACOSTA, Pedro c/ CONSTRUCCIONES YAPEYÚ s/ Accidente laboral",
    reclamante: "Acosta, Pedro",
    dni: "35.671.440",
    reclamada: "Construcciones Yapeyú S.R.L.",
    cuit: "30-71458203-1",
    conciliador: "Dr. J. Aquino",
    estado: "sinacuerdo",
    ingreso: "09/06/2026",
    audiencia: "22/07/2026 · 11:00",
    objeto: "Indemnización por accidente in itinere",
    monto: "$ 7.400.000"
  }, {
    id: 5,
    nro: "EXP-2026-004698",
    caratula: "VALLEJOS, Marta c/ SUPERMERCADOS GUARANÍ s/ Despido",
    reclamante: "Vallejos, Marta",
    dni: "24.310.887",
    reclamada: "Supermercados Guaraní S.A.",
    cuit: "30-61790245-8",
    conciliador: "Dra. C. Romero",
    estado: "vencido",
    ingreso: "22/05/2026",
    audiencia: "30/06/2026 · 09:30",
    objeto: "Despido sin causa",
    monto: "$ 2.980.000"
  }, {
    id: 6,
    nro: "EXP-2026-004651",
    caratula: "LÓPEZ, Andrés c/ HOTEL COSTANERA s/ Registración",
    reclamante: "López, Andrés",
    dni: "30.147.902",
    reclamada: "Hotel Costanera S.A.",
    cuit: "30-69034512-7",
    conciliador: "Dra. M. Fernández",
    estado: "archivado",
    ingreso: "10/05/2026",
    audiencia: "12/06/2026 · 08:30",
    objeto: "Empleo no registrado — ley 24.013",
    monto: "$ 1.850.000"
  }],
  audiencias: [{
    hora: "08:30",
    exp: "EXP-2026-004807",
    partes: "MEZA c/ AGROPECUARIA IBERÁ",
    sala: "Sala 1",
    conciliador: "Dra. M. Fernández",
    estado: "audiencia"
  }, {
    hora: "09:00",
    exp: "EXP-2026-004812",
    partes: "GÓMEZ c/ FRIGORÍFICO NEA",
    sala: "Sala 2",
    conciliador: "Dra. M. Fernández",
    estado: "audiencia"
  }, {
    hora: "10:30",
    exp: "EXP-2026-004799",
    partes: "SOSA c/ TEXTIL CORRIENTES",
    sala: "Sala 1",
    conciliador: "Dr. J. Aquino",
    estado: "tramite"
  }, {
    hora: "11:00",
    exp: "EXP-2026-004785",
    partes: "CABRERA c/ ESTACIÓN SAN MARTÍN",
    sala: "Sala 3",
    conciliador: "Dra. C. Romero",
    estado: "audiencia"
  }],
  actuaciones: [{
    fecha: "02/07/2026",
    texto: "Ingreso del reclamo. Sorteo de conciliador: Dra. M. Fernández.",
    icon: "inbox"
  }, {
    fecha: "04/07/2026",
    texto: "Notificación a la reclamada por cédula (art. 7 ley 6.808).",
    icon: "mail"
  }, {
    fecha: "18/07/2026",
    texto: "Primera audiencia: incomparecencia de la reclamada. Se aplica multa.",
    icon: "event_busy"
  }, {
    fecha: "25/07/2026",
    texto: "Audiencia reprogramada para el 14/08/2026, 09:00 hs, Sala 2.",
    icon: "event"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oclo/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Pastilla = __ds_scope.Pastilla;

__ds_ns.PASTILLA_ESTADOS = __ds_scope.PASTILLA_ESTADOS;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
