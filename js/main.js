$(function () {
    
    
    
    $('#addSkill').on('click', function(){
        const input = $('#skills').val();
        const row = `
        <tr>
        <td>${input}</td>
        <td><button class="btn btn-xs btn-danger" id="remove">Remove</button></td>
        </tr>
        `;
        $('#devSkills > tbody').append(row);

        $('#remove').on('click', function(){
            $('tr').click(function(){
                $(this).closest('tr').remove();
            })
        })
    })

})