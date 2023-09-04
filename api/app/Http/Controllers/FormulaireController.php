<?php

namespace App\Http\Controllers;

use App\Models\Formulaire;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FormulaireController extends Controller
{
    public function cliquer(Request $request):Response
    {
        $request->validate([
            'age'=>['required','integer','max:150'],
             'sexe'=>['required','string']
        ]);
        Formulaire::create([
            'age'=>$request->age,
            'sexe'=>$request->sexe,
        ]);
        return response("formulaire creer",201);
    }
    public function index(Request $request):Response
    {

        $data=Formulaire::first();
        return response($data,200);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @param int $id;
     */
    public function modifier(Request $request, $id):response
    {
        Formulaire::whereId($id)->update([
            'age'=>$request->age,
            'sexe'=>$request->sexe,
        ]);

        
        return response ("modification reussie", 201);


    }

    public function supprimer(Request $request, $id):Response
    {
        Formulaire::whereId($id)->delete();
        return response('suppression reussie', 200);

    }

}
