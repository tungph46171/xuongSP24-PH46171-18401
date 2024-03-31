$(function () {
  $.get(linkUserList)
    .then((result) => {
      let data = JSON.parse(result);

      let html = "";
      for (let item of data) {
        let type = item.type
          ? '<span class="badge bg-primary">Admin</span>'
          : '<span class="badge bg-warning">Member</span>';

        html += `
                <tr id="row-${item.id}">
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>
                        ${type}
                    </td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info">Show</a>
                            <button type="button" class="btn btn-warning">Edit</a>
                            <button type="button"
                                onclick="_delete(${item.id})"
                                class="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            `;
      }

      $("tbody").append(html);
    })
    .catch((err) => {
      console.log(err);
    });
});

function _delete(id) {
  if (confirm("Are you sure?")) {
    $.get(linkUserDelete + id)
      .then((result) => {
        $("tr#row-" + id).remove();
        
        alert('Thao tác thành công!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
