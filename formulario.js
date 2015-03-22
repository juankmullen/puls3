var $form=$("#formulario"),
	$titulo=$("#titulo"),
	$url=$("#url"),
	$buttom=$("#mostrar-form"),
	$list=$("#contenido"),
	$post=$(".item").first();


function mostrarFormulario()
{   $form.slideToggle();
return false;
}
function mostrarOcultarFormulario()
{
   $form.slideToggle();
	return false;
}
function agregarPost()
{
	var url=$url.val(),
		titulo=$titulo.val(),
		$clone=$post.clone();


		$clone.find(".titulo_item a")
			.text(titulo)
			.attr('href',url);

        	$clone.hide();

        	$list.prepend($clone);
					$titulo.val("");
					$url.val("");
        	$clone.fadeIn();
					mostrarOcultarFormulario();

		return false;

}
//eventos

$buttom.click(mostrarFormulario);
$form.on("submit",agregarPost);
