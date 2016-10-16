require "base64"

namespace :import do

  desc "Imports modules information from github"
  task modules: :environment do
    # get all modules
    client = Octokit::Client.new(access_token: "80f57a5d6ce5b6902f5cb4351a75627df9b19d39")
    puts "#{ZoonModule.count} in our database"
    client.contents("zoonproject/modules", path: "R").each do |file|
      file_name = file[:name]
      path = file[:path]
      file_content = Base64.
        decode64(client.contents("zoonproject/modules", path: path)[:content]).
        split("\n")

      zoon = ZoonModule.find_or_initialize_by(name: file_name, path_to_module: path)
      [[:title, "@title"], [:description, "@description"], [:author, "@author"],
       [:version, "@section Version"], [:date_submitted, "@section Data submitted:"],
       [:family, "@family"]].each do |term|
         term_line = file_content.select{|t| t.include?("#' #{term[1]}")}.first
         if term_line
           encoded = term_line.gsub("#' #{term[1]} ", "").to_s.
             encode('UTF-8', {
               :invalid => :replace,
               :undef   => :replace,
               :replace => '?'
             })
           zoon.send("#{term[0]}=", encoded)
         end
       end
       begin
         zoon.save!
       rescue
         debugger
       end
       sleep(1)
    end
    puts "#{ZoonModule.count} now in our database"
  end
end
