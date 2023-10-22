import React from 'react'

const PostingPage = () => {
    return (
        <div className='p-3'>

            <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Posting
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Description</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row '>
                <div className='col-4'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Tampilkan
                        </label>
                    </div>
                    <h6>Title</h6>
                    <p>simple text plain</p>
                </div>

                <div className='col-4'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Tampilkan
                        </label>
                    </div>
                    <h6>Title</h6>
                    <p>simple text plain</p>
                </div>

                <div className='col-4'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Tampilkan
                        </label>
                    </div>
                    <h6>Title</h6>
                    <p>simple text plain</p>
                </div>
            </div>
        </div>
    )
}

export default PostingPage