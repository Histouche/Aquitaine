import { Injectable } from '@angular/core';

@Injectable()
export class VariablesService {
  name = '';
  password = '';
  email = '';
  isConnected = false;
  points = 0;
  titre: String;
  sousTitre: String;
  page: String;
  menuOpen: boolean;
  currentTopic: any;
  currentPage: number;
  filtre;
  loading: boolean;
  snackBar: false;
  tabMonths = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  updateAvailable: boolean;
  signalId = '-1';

  constructor() {

  }
  /* connexion variables */
  getName() {
    return this.isConnected;
  }
  setName(isConnected) {
    this.isConnected = isConnected;
  }
  getPassword() {
    return this.isConnected;
  }
  setPassword(isConnected) {
    this.isConnected = isConnected;
  }
  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }
  getConnected() {
    return this.isConnected;
  }
  setConnected(isConnected) {
    this.isConnected = isConnected;
  }
  getPoints() {
    return this.points;
  }
  setPoints(points) {
    this.points = points;
  }





  getSignalId() {
    return this.signalId;
  }
  getUpdateAvailable() {
    return this.updateAvailable;
  }
  getMonthTxt(index) {
    return this.tabMonths[index - 1];
  }

  getLoading() {
    return this.loading;
  }
  getTitre() {
    return this.titre;
  }
  getSousTitre() {
    return this.sousTitre;
  }
  getPage() {
    return this.page;
  }
  getMenuOpen() {
    return this.menuOpen;
  }
  getCurrentTopic() {
    return this.currentTopic;
  }
  getCurrentPage() {
    return this.currentPage;
  }
  getFiltre() {
    return this.filtre;
  }
  getSnackBar() {
    return this.snackBar;
  }
  setTitre(titre) {
    this.titre = titre;
  }
  setSousTitre(sousTitre) {
    this.sousTitre = sousTitre;
  }
  setPage(page) {
    this.page = page;
  }
  setMenuOpen(isopen) {
    this.menuOpen = isopen;
  }
  setCurrentTopic(topic) {
    this.currentTopic = topic;
  }
  setCurrentPage(page) {
    this.currentPage = page;
  }
  setFiltre(filtre) {
    this.filtre = filtre;
  }
  setLoading(loading) {
    this.loading = loading;
  }
  setSnackBar(displayed) {
    this.snackBar = displayed;
  }
  setUpdateAvailable(available) {
    this.updateAvailable = available;
  }
  setSignalId(signalId) {
    this.signalId = signalId;
  }
}

