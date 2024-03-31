<div class="row">
    <h2>Danh sách User</h2>

    <table class="table table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
                
        </tbody>
    </table>
</div>

<script>
    let linkUserList    = '<?= BASE_URL . '?act=ajax-user-list' ?>';
    let linkUserCreate  = '<?= BASE_URL . '?act=ajax-user-create' ?>';
    let linkUserShow    = '<?= BASE_URL . '?act=ajax-user-show&id=' ?>';
    let linkUserUpdate  = '<?= BASE_URL . '?act=ajax-user-update&id=' ?>';
    let linkUserDelete  = '<?= BASE_URL . '?act=ajax-user-delete&id=' ?>';
</script>
<script src="<?= BASE_URL ?>/assets/js/user.js"></script>