
$( document ).ready(function() {
    const date = new Date();
    const member = ["TuanDQ", "ChienDQ", "HungLM"];
    const title = $( "#niko-member" );
    member.forEach( (elm, index) => {
        title.append( $( "<td>" ).text( elm ) );
    });
});