$(document).ready(function () {
    $('#insertForm').hide();
    $('#updateForm').hide();
    $('#addStudentBtn').click(function () {
        $('#updateForm').hide();
        $('#insertForm').toggle(500);
    });
    $('#updateStudentBtn').click(function () {
        $('#insertForm').hide();
        $('#updateForm').toggle(500);
    });

    // Delete button
    $('.deleteStudentBtn').click(function () {
        //get infor of student to delete here
        if (
            confirm(
                'Do you want to delete student id: ' +
                    $(this).parent().parent().parent().first().children().first().text(),
            )
        ) {
            $(this).parent().parent().parent().remove();
        }
    });

    $('#CreateNewStudentBtn').click(function () {
        alert('asdaksd');
    });
});
