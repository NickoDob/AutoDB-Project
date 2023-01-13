import {makeAutoObservable} from "mobx";

export default class AutoGroup {
    constructor() {
        this._marks = []
        this._autos = []
        this._selectedMark = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setMarks(marks) {
        this._marks = marks
    }
    setAutos(autos) {
        this._autos = autos
    }

    setSelectedMark(mark) {
        this.setPage(1)
        this._selectedMark = mark
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }


    get marks() {
        return this._marks
    }
    get autos() {
        return this._autos
    }
    get selectedMark() {
        return this._selectedMark
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
