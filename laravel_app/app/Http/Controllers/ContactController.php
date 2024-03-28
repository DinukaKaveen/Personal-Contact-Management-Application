<?php

namespace App\Http\Controllers;

use Exception;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Log;


class ContactController extends Controller
    {
    public function get_contacts()
        {
        $contacts = Contact::all();

        return response()->json([
            'contacts' => $contacts
        ], 200);
        }

    public function create_contact(Request $request)
        {

        try {
            Contact::create([
                'name'  => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'note'  => $request->note
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Contact created successfully',
            ], 200);
            }
        catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'success' => false,
                'message' => "Something went wrong",
            ], 500);
            }

        }

    public function delete_contact($id)
        {
        $contact = Contact::find($id);

        if ( $contact ) {
            $contact->delete();
            return response()->json([
                'message' => 'Contact deleted successfully'
            ], 200);
            }
        else {
            return response()->json([
                'message' => 'Contact not found'
            ], 404);
            }

        }

    }
