class DomainSchema {
  constructor(label, table, form){
    this.label = label;
    this.table = table;
    this.form = form;
  }

  get fields() {
    return this.form.fields;
  }

  get icon() {
    return this.form.icon;
  }

  get submitLabel() {
    return this.form.submit.label;
  }

  get submitIcon() {
    return this.form.submit.icon;
  }
}

export default DomainSchema;
