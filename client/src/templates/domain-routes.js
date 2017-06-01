class DomainRoutes {

  constructor(baseRoute, path){
    this.baseRoute = baseRoute;
    this.path = path;
  }

  get list() {
    return this.baseRoute + this.path;
  }

  get new() {
    return this.baseRoute + this.path + '/new';
  }

  get edit() {
    return this.baseRoute + this.path + '/edit/:_id';
  }

  get baseEdit() {
    return this.baseRoute + this.path + '/edit/';
  }

  get view() {
    return this.baseRoute + this.path + '/view/:_id';
  }

  get baseView() {
    return this.baseRoute + this.path + '/view/';
  }


}

export default DomainRoute;
