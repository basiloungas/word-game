class NamepickerController {
  constructor() {
    this.username = '';
  }

  onSubmit() {
    this.onPickName({username: this.username});
  }
}

export default NamepickerController;
